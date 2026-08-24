# Generador de Solicitud BBVA v1.4

## Nueva automatización por convenio

La base `BASE DE CONVENIOS CON GIRO(2).xlsx` fue incorporada al generador.

Registros únicos cargados: 234.

Al seleccionar el convenio, la página carga automáticamente:

- PERIODO DE GRACIA: 1 MES o 2 MESES según la base.
- FECHA DE PAGO.
- RUC.
- DIRECCION TRABAJO.
- DISTRITO TRABAJO.
- PROVINCIA TRABAJO.
- DEPARTAMENTO TRABAJO.
- EMPRESA = nombre del CONVENIO seleccionado.
- GIRO = GIRO de la base.

Estos valores se muestran en la interfaz y se vuelven a aplicar al PDF al momento de generarlo, evitando que el usuario los modifique accidentalmente.

## PDF

La plantilla PDF está integrada en `app.js`, por lo que no es necesario subir `SOLICITUD.pdf` por separado.

## Estructura

- index.html
- styles.css
- app.js
- img/logo-mca.png
- img/logo-bbva.png

## Automáticos del formulario

Se marca con X:

- FAMILIAR
- DEPENDIENTE
- CORREO ELECTRÓNICO
- Afiliar  Enviar
- ELECTRÓNICO
- No
- No_2
- No_3
- No_4
- CANAL DE VENTA  OFICINA

Se escribe:

- TIEMPO DE RESIDENCIA = 10 AÑOS

## GitHub Pages

Subir todos los archivos manteniendo la carpeta `img`.
