VERSION 3.8

SOLUCIÓN DEFINITIVA DE NOMBRES Y APELLIDOS - HOJA 6

La v3.7 intentaba ocultar el widget mediante el flag Hidden, pero algunos
visores PDF seguían renderizando su apariencia original.

La v3.8:
- Busca directamente en /Annots de la página 6.
- Identifica el widget por su Rect exacto:
  [24.519, 364.019, 157.180, 380.727].
- Elimina SOLO esa anotación/widget de la página 6.
- Mantiene las demás apariciones de NOMBRES Y APELLIDOS.
- Dibuja directamente el nombre completo en el recuadro.
- Ajusta automáticamente el tamaño para que entre.
- No usa flatten().
