VERSION 3.6

SOLUCIÓN DEL DOBLE NOMBRE EN HOJA 6

En v3.5 el nombre se dibujaba directamente sobre la página, pero el
widget AcroForm original seguía visible. La v3.6:
- Oculta únicamente el widget original de NOMBRES Y APELLIDOS de la hoja 6
  mediante el flag Hidden.
- Mantiene los demás widgets del mismo campo.
- Dibuja una sola vez el nombre completo sobre la hoja 6.
- Ajusta el tamaño automáticamente para el recuadro.
- Mantiene el llenado y la compatibilidad de v3.5.
- No usa flatten().
