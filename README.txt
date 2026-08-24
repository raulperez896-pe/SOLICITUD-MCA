VERSION 2.8

CORRECCIÓN DEL PDF CORRUPTO EN ACROBAT

La v2.7 usaba flatten() para convertir el AcroForm a impresión fija.
Algunas plantillas AcroForm complejas pueden quedar corruptas al aplanarse,
lo que produce errores como "Problema al leer el documento (18)".

La v2.8:
- NO usa flatten().
- Mantiene el PDF estructuralmente válido.
- Llena y actualiza las apariencias de los campos.
- Activa SOLO LECTURA en todos los campos antes de guardar.
- El usuario no puede modificar los campos en Acrobat.
- Guarda con useObjectStreams:false para mayor compatibilidad.
- Mantiene el ajuste de tamaño, domicilio, nombres, fecha, convenios y demás
  funciones de la versión anterior.

Subir únicamente index.html a GitHub Pages.
