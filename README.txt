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
