const PDF_FILE = "./SOLICITUD.pdf";

const FIXED_CHECKBOXES = [
  "FAMILIAR",
  "DEPENDIENTE",
  "CORREO ELECTRÓNICO",
  "Afiliar  Enviar",
  "ELECTRÓNICO",
  "No",
  "No_2",
  "No_3",
  "No_4",
  "CANAL DE VENTA  OFICINA"
];

const FIXED_TEXT = {
  "TIEMPO DE RESIDENCIA": "10 AÑOS"
};

const SELECT_GROUPS = {
  tipoOperacion: ["NUEVO","SUBROGADO","RENOVADO","OTRO"],
  modalidad: [
    "Individual Convencional",
    "Mancomunado Convencional",
    "Póliza endosada",
    "Individual con Devolución",
    "Mancomunado con Devolución"
  ],
  tipoDocumento: ["TIPO DNI","TIPO C EXT"],
  educacion: ["SUPERIOR","TECNICA","SECUNDARIA","UNIVERSITARIA"],
  estadoCivil: ["SOLTERO","CASADOA","VIUDOA","DIVORCIADOA"],
  gracia: ["1 mes","2 MESES","undefined"]
};

let originalPdf = null;
let fieldNames = new Set();
let textNames = [];

const $ = id => document.getElementById(id);

function setStatus(message, type="") {
  $("status").textContent = message;
  $("status").className = "status " + type;
}

function renderTextFields(names) {
  const box = $("textFields");
  box.innerHTML = "";

  // Solo campos de texto reales del AcroForm.
  // Se ocultan los campos que el usuario indicó que son automáticos.
  const hidden = new Set(["TIEMPO DE RESIDENCIA"]);
  textNames = [...new Set(names)]
    .filter(n => !hidden.has(n))
    .sort((a,b) => a.localeCompare(b, "es"));

  for (const name of textNames) {
    const label = document.createElement("label");
    const span = document.createElement("span");
    const input = document.createElement("input");
    span.textContent = name;
    input.type = "text";
    input.dataset.pdfField = name;
    input.placeholder = name;
    label.append(span, input);
    box.appendChild(label);
  }
}

async function fetchPdf() {
  // Resuelve la URL respecto a la URL real de GitHub Pages.
  const url = new URL(PDF_FILE, document.baseURI).href;
  const response = await fetch(url, {cache:"no-store"});
  if (!response.ok) {
    throw new Error(`No se encontró SOLICITUD.pdf (${response.status}). Debe estar en la raíz del repositorio.`);
  }
  const bytes = await response.arrayBuffer();
  if (!bytes || bytes.byteLength < 1000) {
    throw new Error("SOLICITUD.pdf está vacío o no es accesible.");
  }
  return bytes;
}

async function loadTemplate() {
  try {
    if (!window.PDFLib) throw new Error("No se cargó pdf-lib. Comprueba la conexión a Internet.");
    originalPdf = await fetchPdf();

    const doc = await PDFLib.PDFDocument.load(originalPdf);
    const form = doc.getForm();
    const fields = form.getFields();

    fieldNames = new Set(fields.map(f => f.getName()));

    const texts = [];
    for (const name of fieldNames) {
      try {
        form.getTextField(name);
        texts.push(name);
      } catch (_) {}
    }

    renderTextFields(texts);
    setStatus(`Plantilla cargada correctamente. ${fields.length} campos del PDF detectados y ${texts.length} campos de texto disponibles.`, "ok");
  } catch (error) {
    console.error(error);
    setStatus(error.message || "No se pudo cargar la plantilla PDF.", "error");
  }
}

function setCheckbox(form, name, checked) {
  if (!fieldNames.has(name)) return false;
  try {
    const cb = form.getCheckBox(name);
    if (checked) cb.check();
    else cb.uncheck();
    return true;
  } catch (e) {
    console.warn("Casilla no compatible:", name, e);
    return false;
  }
}

function setText(form, name, value) {
  if (!fieldNames.has(name)) return false;
  try {
    form.getTextField(name).setText(value ?? "");
    return true;
  } catch (e) {
    console.warn("Campo de texto no compatible:", name, e);
    return false;
  }
}

function setSelectedGroup(form, names, selected) {
  for (const name of names) {
    if (fieldNames.has(name)) setCheckbox(form, name, name === selected);
  }
}

function readValues() {
  const values = {};
  document.querySelectorAll("[data-pdf-field]").forEach(input => {
    values[input.dataset.pdfField] = input.value;
  });
  return values;
}

async function generatePdf() {
  try {
    if (!originalPdf) throw new Error("La plantilla PDF no está cargada.");

    const convenio = $("convenio").value;
    const op = $("tipoOperacion").value;
    const modalidad = $("modalidad").value;

    if (!convenio || !op || !modalidad) {
      throw new Error("Selecciona Convenio, Tipo de operación y Modalidad del seguro.");
    }

    const doc = await PDFLib.PDFDocument.load(originalPdf);
    const form = doc.getForm();

    // Casillas que siempre deben llevar X.
    for (const name of FIXED_CHECKBOXES) setCheckbox(form, name, true);

    // Valor fijo.
    setText(form, "TIEMPO DE RESIDENCIA", FIXED_TEXT["TIEMPO DE RESIDENCIA"]);

    // Selecciones del usuario: una sola X por grupo.
    setSelectedGroup(form, SELECT_GROUPS.tipoOperacion, op);
    setSelectedGroup(form, SELECT_GROUPS.modalidad, modalidad);
    setSelectedGroup(form, SELECT_GROUPS.tipoDocumento, $("tipoDocumento").value);

    if ($("educacion").value)
      setSelectedGroup(form, SELECT_GROUPS.educacion, $("educacion").value);
    if ($("estadoCivil").value)
      setSelectedGroup(form, SELECT_GROUPS.estadoCivil, $("estadoCivil").value);
    if ($("gracia").value)
      setSelectedGroup(form, SELECT_GROUPS.gracia, $("gracia").value);

    // Datos escritos por el usuario.
    const values = readValues();
    for (const [name, value] of Object.entries(values)) {
      setText(form, name, value);
    }

    form.updateFieldAppearances();

    const bytes = await doc.save();
    const blob = new Blob([bytes], {type:"application/pdf"});
    const url = URL.createObjectURL(blob);

    const dni = (values["DNI"] || "SIN_DNI").replace(/[^\dA-Za-z_-]/g, "");
    const cv = convenio.replace(/[^\wáéíóúñÁÉÍÓÚÑ -]/g, "").replace(/\s+/g, "_");
    const filename = `Solicitud_${cv}_${dni}.pdf`;

    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();

    setTimeout(() => URL.revokeObjectURL(url), 2000);
    setStatus(`PDF generado correctamente: ${filename}`, "ok");
  } catch (error) {
    console.error(error);
    setStatus(error.message || "No se pudo generar el PDF.", "error");
  }
}

function clearForm() {
  $("formulario").reset();
  document.querySelectorAll("[data-pdf-field]").forEach(i => i.value = "");
  $("tipoDocumento").value = "TIPO DNI";
  setStatus("Formulario limpio. Los valores automáticos se aplicarán al generar.");
}

$("generar").addEventListener("click", generatePdf);
$("limpiar").addEventListener("click", clearForm);
loadTemplate();
