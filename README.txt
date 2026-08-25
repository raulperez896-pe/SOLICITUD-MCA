VERSION 4.7

SE INCORPORA DPS (DECLARACIÓN PERSONAL DE SEGUROS)

DATOS NUEVOS:
- Nacionalidad: desplegable, PERUANO como primera opción y valor por defecto.
- Talla.
- Peso.
- Fecha de nacimiento: se reutiliza el campo que ya existía en la solicitud.

AUTOMÁTICOS EN DPS:
- Apellidos, nombres, DNI, cargo, celular.
- Giro del convenio.
- Monto.
- Plazo con periodo de gracia.
- Oficina.
- Ciudad.
- Fecha actual.
- Tipo de préstamo = CONVENIO.
- Moneda = SOLES.
- Tipo de seguro según modalidad.
- El cónyuge NO se llena.

CUESTIONARIO:
Se añadió en la página un bloque para el TITULAR con Sí/No:
1. Salud/tratamientos/enfermedades indicadas.
2. Otras enfermedades.
3. Antecedentes de ambos padres antes de 60 años.
4. Embarazo.
5a. Fuma.
5b. Alcohol diariamente.
6. Actividad laboral/deportiva de riesgo.
Además aparecen campos opcionales para mes de gestación, cigarros/día y actividad de riesgo.

BOTONES:
- Generar Solicitud PDF
- Generar DPS PDF

El DPS se genera con los datos autocompletados y se deja en solo lectura.
No se utiliza flatten().


CAMBIO v4.2:
Los datos nuevos de DPS están en un apartado independiente '3. DPS — Declaración Personal de Seguros'. No se mezclan con Datos personales, laborales u operación. Datos finales pasan a la sección 4.


CAMBIO v4.3:
FECHA DE NACIMIENTO vuelve a Datos a llenar como campo principal. En el apartado DPS solo se muestra como dato reutilizado automáticamente; no se crea una segunda captura. El generador DPS toma el valor del campo principal.


CAMBIO v4.4:
Se agregó SEXO dentro del apartado DPS, con selección M - MASCULINO o F - FEMENINO. Al generar el DPS se marca automáticamente la casilla correspondiente.


CAMBIO v4.5:
El cuestionario DPS ahora muestra las preguntas dependientes únicamente cuando la respuesta anterior es SÍ. Si se selecciona NO, la pregunta adicional se oculta y su valor se limpia. Actualmente: embarazo -> mes de gestación; fuma -> cigarros/día; actividad de riesgo -> cuál.


CAMBIO v4.6:
La Fecha de nacimiento se elimina de la pantalla del apartado DPS porque ya se captura en Datos a llenar. El DPS la reutiliza automáticamente al generar el PDF. Regla aplicada: los datos repetidos no se muestran nuevamente; solo aparecen en pantalla los datos que realmente requieren captura para el DPS.


CAMBIO v4.7: CORRECCIÓN REAL DEL CUESTIONARIO CONDICIONAL. Los listeners ahora se ejecutan dentro del script antes de prepare(); se eliminó código que había quedado después de </html>. Las preguntas Mes de gestación, Cigarros/día y Actividad de riesgo permanecen ocultas hasta seleccionar SÍ.


CAMBIO v4.10:
El campo NOMBRES Y APELLIDOS se construye exactamente como: PRIMER NOMBRE + SEGUNDO NOMBRE + APELLIDO PATERNO + APELLIDO MATERNO, separados por un solo espacio.


CAMBIO v4.11:
Corrección de NOMBRES Y APELLIDOS en hoja 6 para CON SEGURO y SIN SEGURO. Se retira el widget de formulario de esa casilla y se dibuja una sola vez dentro del recuadro, con tamaño dinámico y ajuste al ancho para evitar nombres recortados o duplicados.

CAMBIO v4.12:
Se incorpora Carta de Compra de Deuda E0264 como PDF condicional. Aparece solo para SUBROGADO y SUBROGADO + RENOVADO.
Se reutilizan automáticamente NOMBRES Y APELLIDOS, DNI, DIRECCION, DISTRITO, CELULAR, EMAIL y FECHA.
Se agregan 4 filas de PRÉSTAMOS/DISPOSICIÓN DE EFECTIVO, 4 filas de TARJETAS, entidades financieras provenientes del Excel CUADRO DE COMPRA DE DEUDA 2 y cálculos automáticos A, B y A+B.
Para moneda US$ se muestra TC obligatorio. Se incorporan 2 filas opcionales de cuenta de depósito.


CAMBIOS v4.14: Compra de deuda con filas dinámicas Agregar/Eliminar; se retiró Cuenta de depósito; totales A/B/A+B corregidos; TC solo para US$; periodo de gracia corregido por plantilla; FECHAS SIN SEGURO usa DDMMYYYY.


CAMBIOS v4.14:
- Corregido el TC de deudas en US$: el total A/B convierte US$ a soles usando TC y ya no ignora el campo.
- Carta de Compra de Deuda: se completan PROMOTOR y DNI SUPERVISORA y se dibuja directamente NOMBRE DEL SUPERVISOR y NOMBRE DEL PROMOTOR en página 3.
- Solicitud SIN SEGURO: corregida la comparación del periodo de gracia para marcar 1 mes o 2 meses según el convenio.


CAMBIO v4.15: Las filas de préstamos/disposición y tarjetas ahora son bloques independientes en CSS. Cada nueva obligación se inserta exactamente debajo de la anterior, manteniendo sus siete columnas alineadas. Se eliminó display:contents que mezclaba las filas.


CAMBIO v4.16: Se corrigió la Carta de Subrogación en página 3. El nombre del supervisor y del promotor se limpian visualmente en sus recuadros y se dibujan una sola vez, centrados y con tamaño adaptativo. Se evita que el texto fijo/valor previo del PDF se cruce con los nombres. El DNI de la supervisora continúa usando su campo identificado.


CAMBIO v4.17: Supervisor y promotor de la Carta de Subrogación se dibujan al final, después de actualizar apariencias de campos, para impedir que el texto fijo o los widgets de la plantilla se crucen con los datos. Se limpia visualmente solo la zona de nombres y se dibuja una sola vez cada dato.


CAMBIO v4.18: En la firma inferior de la Carta de Subrogación se elimina visualmente el texto fijo NOMBRE DEL SUPERVISOR y se dibuja el nombre real del supervisor ingresado en el formulario, con ajuste automático de tamaño para encajar en el espacio de la firma.


CAMBIO v4.19: Corrección definitiva de la Carta de Subrogación. Los campos AcroForm se aplanan antes de dibujar Supervisor, Promotor, nombre del supervisor en la firma y DNI del supervisor. Se limpian las zonas originales para impedir textos duplicados o cruzados.


CAMBIO v4.20: La firma superior FIRMA DEL CLIENTE queda intacta. Supervisor y promotor solo se dibujan en el recuadro de datos del banco. En la firma inferior se reemplazan exclusivamente NOMBRE DEL SUPERVISOR y DNI SUPERVISOR por los datos reales del formulario, conservando la línea y el cargo.


CAMBIO v4.21: Se corrigieron las coordenadas de la firma inferior del supervisor. Se elimina únicamente NOMBRE DEL SUPERVISOR y DNI DEL SUPERVISOR en sus posiciones reales (y=456-477), sin tocar la FIRMA DEL CLIENTE ni la zona superior. El supervisor y promotor de la tabla superior se mantienen.


CAMBIO v4.21: Se agregó un indicador visible de versión al final de la página: VERSIÓN 4.21. Este indicador debe actualizarse en cada nueva versión.


CAMBIO v4.22: Corrección de coordenadas PDF-lib de la firma inferior. La zona superior de FIRMA DEL CLIENTE queda intacta. Solo se cubren las etiquetas inferiores NOMBRE DEL SUPERVISOR y DNI DEL SUPERVISOR y se dibujan los valores reales.


CAMBIO v4.23: El selector de Convenio se reemplazó por un buscador interno con sugerencias (datalist). El usuario escribe parte del convenio, selecciona una sugerencia y se carga automáticamente toda la información institucional asociada al convenio. Se conserva un select interno oculto para mantener compatibilidad con la lógica existente.


CAMBIO v4.24: El buscador de convenios filtra y muestra sugerencias EN TIEMPO REAL con cada letra escrita. Las coincidencias aparecen inmediatamente debajo del campo, sin esperar Enter, change ni click. Al seleccionar una sugerencia se cargan automáticamente los datos del convenio.


CAMBIO v4.25: Se incorporaron los cuestionarios adicionales por convenio dentro de la generación del DPS. FONBIEPOL/PNP agrega el Cuestionario Servicio de Seguridad; Ejército del Perú, Marina de Guerra del Perú y Fuerza Aérea del Perú agregan SUSC-TR7 de FFAA. Los datos comunes se reutilizan automáticamente, Fuerza se selecciona con los tres nombres solicitados y se marca Ejército/Marina/Aviación en el PDF. Rango reutiliza CARGO. Los detalles y obligaciones ofrecen LABORES/ÁREA ADMINISTRATIVA o DETALLAR. Los documentos adicionales se anexan al PDF del DPS solo cuando corresponde y el PDF queda no editable.


CAMBIO v4.26: Corrección de campos condicionales DPS/PNP/FFAA. DETALLAR, tipo de vehículo, cilindrada, cárcel, incapacidad, detalles de actividades, obligaciones, región conflictiva y región en crisis aparecen inmediatamente según la respuesta. El cambio de convenio actualiza el cuestionario adicional sin recargar.


CAMBIO v4.39: Se reforzó la lógica condicional en tiempo real. En PNP, al seleccionar SI en uso futuro de explosivos aparece inmediatamente Detalle explosivos futuros; también se reforzaron vehículo, moto, cárcel, tareas, función e incapacidad. Se mantienen los campos de detalle FFAA y se actualizan sin recargar la página.

CAMBIO v4.39: En PNP, '¿Es posible que en el futuro haga uso de explosivos?' solo registra SI/NO. No se solicita ni se muestra un campo de detalle para esta pregunta.

CAMBIO v4.39: Confirmado y restaurado. En PNP, al marcar SÍ en '¿Es posible que en el futuro haga uso de explosivos?' aparece el campo 'Detalle explosivos futuros' para completar y el dato se conserva para el PDF.

CAMBIO v4.39: Se limpian todos los campos de las plantillas CON/SIN SEGURO y DPS antes de colocar datos, evitando que queden datos de ejemplo o marcas anteriores. Se corrigieron las coordenadas de las casillas M/F del DPS y se marca DNI de forma explícita. Los datos se escriben nuevamente sobre la plantilla limpia.


VERSIÓN 4.39
- Corrección de casillas DPS: DNI/C. EXT, sexo M/F, moneda SOLES y tipo de desgravamen según modalidad.
- Se limpian las casillas de ejemplo sin eliminar los bordes; únicamente se marca la opción seleccionada.
- Cuestionario PNP y FFAA reconstruido sobre los PDFs limpios proporcionados por el usuario, respetando sus coordenadas originales.
- Corrección de posiciones de nombre, fecha, respuestas, detalles, región conflictiva/crisis, obligaciones y firma.
- PNP: detalle de explosivos futuros solo cuando la respuesta es SÍ.
- Se evita duplicar LABORES ADMINISTRATIVAS.
- El DPS se aplana al generar para que el PDF final no quede editable.
- Versión visible 4.39 al final de la página.


VERSIÓN 4.39
- Fecha actual en la línea "solicitud de fecha" del cuestionario PNP.
- Fecha actual en la línea "solicitud de fecha" del cuestionario FFAA.
- El PDF final completo se aplana después de anexar PNP/FFAA: todas las hojas quedan impresas/fijas y no editables.
- Se conserva el diseño, líneas y casilleros de los PDFs originales proporcionados por el usuario.
- C. EXT: marca Otros y mantiene el número de documento en la línea de N°.


VERSIÓN 4.39
- Corrección de C. EXT en DPS: al seleccionar C. EXT se marca "Otros".
- En el campo N° ya no se coloca el número del documento; se coloca literalmente "C. EXT".
- Para DNI se mantiene el comportamiento anterior: marca DNI y coloca el número de documento.


VERSIÓN 4.39
- C. EXT: marca Otros, conserva el número del documento en N° y agrega "C. EXT" al costado de Otros.
- La fecha de la declaración PNP se coloca sobre la línea original de "solicitud de fecha" para que quede cuadrada.
- Se refuerza el aplanado del PDF final: todos los campos se convierten en impresión fija; si el primer flatten falla, se fuerzan los campos a solo lectura y se vuelve a aplanar.


VERSIÓN 4.39
- Corrección del error "drawTextTop is not defined".
- C. EXT utiliza el helper PDF existente drawFitTop.
- Se mantiene: marca Otros, coloca "C. EXT" al costado y conserva el número de documento en N°.


VERSIÓN 4.39
- Corrección definitiva del error "drawFitTop is not defined".
- C. EXT utiliza un helper local del generador DPS, independiente del cuestionario adicional.


VERSIÓN 4.39
- Corrección principal: la Solicitud PDF ya no queda como formulario editable.
- El aplanado (flatten) se ejecuta DESPUÉS de colocar todos los datos y textos, justo antes de guardar el PDF.
- La Carta de Compra de Deuda también se aplana al final, después de dibujar supervisor/promotor.
- DPS, PNP y FFAA continúan aplanándose como impresión fija.
- El resultado final contiene los datos colocados sobre la plantilla, pero sin campos editables.


VERSIÓN 4.39
- Se reemplazaron las plantillas adicionales PNP y FFAA por los nuevos PDFs proporcionados por el usuario.
- Las dos plantillas nuevas tienen 2 páginas cada una y 0 campos/widgets PDF.
- Al estar ya convertidas a impresión fija, se incorporan como hojas sin campos editables.
- Se mantiene el aplanado de Solicitud, DPS y Carta al finalizar la generación.


VERSIÓN 4.39
- Corrección visual de casilleros PNP/FFAA.
- La plantilla nueva usa corchetes [ ]; ahora se cubre el par completo y se dibuja un único cuadro real.
- La X queda centrada dentro del cuadro seleccionado.
- Se evita que quede el corchete original visible debajo o al costado de la marca.
