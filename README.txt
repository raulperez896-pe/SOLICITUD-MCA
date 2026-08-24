VERSION 3.3

CORRECCIÓN ESPECÍFICA DE NOMBRES Y APELLIDOS EN HOJA 6

- Se mantiene intacto el llenado de datos de v3.0.
- Se mantiene la estructura PDF compatible con Acrobat.
- NOMBRES Y APELLIDOS se procesa por cada recuadro.
- Para recuadros de hasta 140 pt de ancho se usa un tamaño seguro de 5.2 pt
  y se reduce solo si el texto excepcionalmente largo aún no entra.
- El recuadro de la hoja 6 mide aproximadamente 133 pt, por lo que esta
  regla está dirigida específicamente a ese espacio.
- Los recuadros grandes conservan un tamaño mayor.
- No se usa flatten().
