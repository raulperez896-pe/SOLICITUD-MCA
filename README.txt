VERSION 2.7

CORRECCIÓN DE LLENADO + PDF FIJO

- Se vuelve a un método estable para AcroForm:
  setText -> setFontSize -> updateAppearances.
- El tamaño se calcula usando el recuadro más pequeño de cada campo.
- Se utiliza Helvetica embebida.
- Se ejecuta flatten() DESPUÉS de llenar y actualizar las apariencias.
- El PDF final NO es editable.
- Se oculta la barra de información automática en la página.
- Se mantienen convenios, datos automáticos, domicilio en cascada,
  nombres y apellidos automáticos, fecha y periodo de gracia.

Subir únicamente index.html a GitHub Pages.
