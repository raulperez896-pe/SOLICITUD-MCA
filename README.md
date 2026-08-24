# Generador de Solicitud BBVA – GitHub Pages

## Incluye
- `index.html`
- `styles.css`
- `app.js`
- `assets/SOLICITUD.pdf` (la solicitud que enviaste)

## Reglas automáticas
Al generar se marcan con X:
`FAMILIAR`, `DEPENDIENTE`, `CORREO ELECTRÓNICO`, `Afiliar  Enviar`, `ELECTRÓNICO`, `No`, `No_2`, `No_3`, `No_4` y `CANAL DE VENTA  OFICINA`.

También se escribe siempre:
`TIEMPO DE RESIDENCIA = 10 AÑOS`.

## Desplegables
Convenio, tipo de operación, modalidad del seguro, tipo de documento, nivel de educación, estado civil y periodo de gracia.

## Campos del PDF
Los campos de texto se detectan usando el nombre interno AcroForm del PDF. No se cambian sus nombres.

## Convenio
El PDF actual no contiene un campo AcroForm llamado `CONVENIO`; por eso el convenio se usa como selector interno y para el nombre del archivo generado. Más adelante se puede añadir la lógica específica por convenio.

## GitHub Pages
Sube todo el contenido a un repositorio y activa:
Settings → Pages → Deploy from a branch → rama principal → `/root`.

La página usa `pdf-lib` desde jsDelivr, por lo que necesita Internet al abrirse.
