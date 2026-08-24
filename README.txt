VERSION 3.5

SOLUCIÓN DIRECTA PARA NOMBRES Y APELLIDOS - HOJA 6

El widget AcroForm de la hoja 6 mantiene una apariencia propia que no
responde correctamente a setFontSize(). Por ello v3.5 no depende de ese
widget para la parte visible del nombre:

- Mantiene el llenado AcroForm original.
- Mantiene los demás campos y su lógica.
- Después de generar las apariencias, cubre únicamente el área del
  nombre en la hoja 6.
- Dibuja NOMBRES Y APELLIDOS directamente sobre la página con Helvetica.
- Tamaño inicial 6.2 pt.
- Si el nombre fuera excepcionalmente largo, reduce automáticamente.
- El texto queda completo y no depende del tamaño de fuente del widget.
- No se usa flatten().
