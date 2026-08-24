VERSION 3.7

CORRECCIÓN DEL NOMBRE DUPLICADO EN HOJA 6

El problema de v3.6 era que se asumía que widgets[2] correspondía a la
hoja 6. El orden de widgets no debe asumirse.

v3.7:
- Identifica el widget original de NOMBRES Y APELLIDOS de la hoja 6 por
  su rectángulo exacto: x=24.519, y=364.019, ancho=132.661, alto=16.708.
- Oculta solamente ese widget.
- Mantiene el nombre dibujado directamente sobre la página.
- El nombre pequeño se conserva.
- Las demás apariciones de NOMBRES Y APELLIDOS no se modifican.
- No usa flatten().
