const PDF_URLS=["assets/SOLICITUD.pdf","./assets/SOLICITUD.pdf","SOLICITUD.pdf","./SOLICITUD.pdf"];
const AUTO_CHECKS=["FAMILIAR","DEPENDIENTE","CORREO ELECTRÓNICO","Afiliar  Enviar","ELECTRÓNICO","No","No_2","No_3","No_4","CANAL DE VENTA  OFICINA"];
const AUTO_TEXT={"TIEMPO DE RESIDENCIA":"10 AÑOS"};
const MAPS={
 tipoOperacion:["NUEVO","SUBROGADO","RENOVADO","OTRO"],
 modalidadSeguro:["Individual Convencional","Mancomunado Convencional","Póliza endosada","Individual con Devolución","Mancomunado con Devolución"],
 tipoDocumento:["TIPO DNI","TIPO C EXT"],
 nivelEducacion:["SUPERIOR","TECNICA","SECUNDARIA","UNIVERSITARIA"],
 estadoCivil:["SOLTERO","CASADOA","VIUDOA","DIVORCIADOA"],
 periodoGracia:["1 mes","2 MESES","undefined"]
};
const HIDDEN_TEXT=new Set(["TIEMPO DE RESIDENCIA"]);
let pdfBytes=null,pdfFieldNames=new Set(),textFieldNames=[],loadedPdfUrl="";
const $=id=>document.getElementById(id);
function status(t,c=""){ $("status").textContent=t;$("status").className="status "+c; }
function renderFields(names){
 const box=$("textFields");box.innerHTML="";
 textFieldNames=names.filter(n=>!HIDDEN_TEXT.has(n));
 for(const name of textFieldNames){
  const lab=document.createElement("label"),sp=document.createElement("span"),inp=document.createElement("input");
  sp.textContent=name;inp.type="text";inp.dataset.fieldName=name;inp.autocomplete="off";inp.placeholder=name;
  lab.append(sp,inp);box.appendChild(lab);
 }
 $("fieldCount").textContent=`Campos de texto detectados: ${textFieldNames.length}. Ordenados según aparecen en el PDF.`;
}
async function loadPdf(){
 try{
  if(!window.PDFLib){throw Error("No se cargó pdf-lib. La página no puede leer el PDF. Revisa que GitHub permita cargar el CDN o que tengas conexión a Internet.")}
  let last="";
  for(const url of PDF_URLS){
   try{
    const r=await fetch(url,{cache:"no-store"});
    if(!r.ok){last=`${url} → HTTP ${r.status}`;continue;}
    const data=await r.arrayBuffer();
    if(!data.byteLength){last=`${url} → archivo vacío`;continue;}
    pdfBytes=data;loadedPdfUrl=url;break;
   }catch(e){last=`${url} → ${e.message}`;}
  }
  if(!pdfBytes)throw Error(`No se pudo cargar SOLICITUD.pdf. Último intento: ${last}. Verifica que el archivo esté subido en la carpeta assets del repositorio.`);
  const doc=await PDFLib.PDFDocument.load(pdfBytes,{ignoreEncryption:false});
  const form=doc.getForm(),fields=form.getFields();
  pdfFieldNames=new Set(fields.map(f=>f.getName()));
  const text=[];for(const f of fields){try{f.getText?text.push(f.getName()):form.getTextField(f.getName())&&text.push(f.getName())}catch(_) {}}
  renderFields(Array.from(new Set(text)));
  $("fieldCount").textContent+=` PDF: ${loadedPdfUrl}`;
  status(`PDF cargado correctamente. ${fields.length} campos AcroForm detectados.`,"ok");
 }catch(e){console.error(e);status(e.message||"Error al cargar el PDF.","error");}
}
function check(form,n,on=true){try{const f=form.getCheckBox(n);on?f.check():f.uncheck();return true}catch(e){console.warn("Casilla no disponible:",n,e);return false}}
function text(form,n,v){if(!pdfFieldNames.has(n))return false;try{form.getTextField(n).setText(v??"");return true}catch(e){console.warn("Campo no disponible:",n,e);return false}}
function selectOne(form,names,value){names.forEach(n=>{if(pdfFieldNames.has(n))check(form,n,n===value)})}
function values(){const v={};document.querySelectorAll("[data-field-name]").forEach(i=>v[i.dataset.fieldName]=i.value);return v}
async function generate(){
 try{
  if(!pdfBytes)throw Error("El PDF todavía no está cargado. Mira el mensaje de Estado y verifica assets/SOLICITUD.pdf.");
  const convenio=$("convenio").value,op=$("tipoOperacion").value,mod=$("modalidadSeguro").value;
  if(!convenio||!op||!mod)throw Error("Selecciona Convenio, Tipo de operación y Modalidad del seguro.");
  const doc=await PDFLib.PDFDocument.load(pdfBytes),form=doc.getForm();
  AUTO_CHECKS.forEach(n=>check(form,n,true));
  text(form,"TIEMPO DE RESIDENCIA","10 AÑOS");
  selectOne(form,MAPS.tipoOperacion,op);selectOne(form,MAPS.modalidadSeguro,mod);
  selectOne(form,MAPS.tipoDocumento,$("tipoDocumento").value);
  if($("nivelEducacion").value)selectOne(form,MAPS.nivelEducacion,$("nivelEducacion").value);
  if($("estadoCivil").value)selectOne(form,MAPS.estadoCivil,$("estadoCivil").value);
  if($("periodoGracia").value)selectOne(form,MAPS.periodoGracia,$("periodoGracia").value);
  else MAPS.periodoGracia.forEach(n=>{if(pdfFieldNames.has(n))check(form,n,false)});
  const vals=values();Object.entries(vals).forEach(([n,v])=>text(form,n,v));
  text(form,"TIEMPO DE RESIDENCIA","10 AÑOS");
  form.updateFieldAppearances();
  const bytes=await doc.save(),url=URL.createObjectURL(new Blob([bytes],{type:"application/pdf"}));
  const dni=(vals.DNI||"SIN_DNI").replace(/\W/g,""),cv=convenio.replace(/[^\wáéíóúñÁÉÍÓÚÑ -]/g,"").replace(/\s+/g,"_");
  const a=document.createElement("a");a.href=url;a.download=`Solicitud_${cv}_${dni}.pdf`;document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),2000);status(`PDF generado correctamente: ${a.download}`,"ok");
 }catch(e){console.error(e);status(e.message||"No se pudo generar el PDF.","error")}
}
function reset(){document.querySelector("#solicitudForm").reset();document.querySelectorAll("[data-field-name]").forEach(i=>i.value="");$("tipoDocumento").value="TIPO DNI";status("Formulario limpio. Los valores automáticos se aplicarán al generar.")}
$("generateBtn").addEventListener("click",generate);$("resetBtn").addEventListener("click",reset);loadPdf();
