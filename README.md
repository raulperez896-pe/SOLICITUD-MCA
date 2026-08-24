# Generador de Solicitud BBVA v1.3

Esta versión corrige dos problemas de las versiones anteriores:

1. La plantilla PDF ya no se solicita mediante una ruta de GitHub Pages.
   El PDF está integrado dentro de `app.js`, por lo que no depende de `assets/SOLICITUD.pdf`.
2. Los datos a llenar se muestran directamente desde el inicio. No se espera a detectar el PDF para construir la interfaz.

## Archivos

- `index.html`
- `styles.css`
- `app.js`
- `img/logo-mca.png`
- `img/logo-bbva.png`

El PDF está integrado en `app.js`.

## Interfaz

No se muestra la sección de campos automáticos.

Se muestran:
- Convenio
- Tipo de operación
- Modalidad del seguro
- Tipo de documento
- Nivel de educación
- Estado civil
- Periodo de gracia
- Todos los campos de texto habilitados del PDF que deben ser llenados/editados

## Reglas automáticas al generar

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

## Logos

El encabezado usa los logos proporcionados:
- MasterCalculadora
- BBVA

No se muestra número de versión.

## GitHub Pages

Subir la estructura completa manteniendo la carpeta `img`.

No es necesario subir un PDF aparte porque ya está integrado en `app.js`.

La generación usa `pdf-lib` desde CDN. La página intenta primero cdnjs y luego unpkg.
