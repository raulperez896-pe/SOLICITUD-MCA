VERSION 3.4

AJUSTE DIRECTO DE NOMBRES Y APELLIDOS

El campo NOMBRES Y APELLIDOS se fija directamente a 4.2 pt mediante
setFontSize() y luego updateAppearances(). Esto evita que el cálculo
por widget sea ignorado por el visor PDF.

El llenado de datos de v3.0 se conserva.
No se usa flatten().
