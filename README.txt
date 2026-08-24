VERSION 1.7 - ARCHIVO ÚNICO

Cambio principal:
- Se eliminó NOMBRES Y APELLIDOS de los campos visibles/editables.
- Al generar el PDF, NOMBRES Y APELLIDOS se construye automáticamente como:
  PRIMER NOMBRE + SEGUNDO NOMBRE + APELLIDO PATERNO + APELLIDO MATERNO
  separados por un espacio.
- Si algún componente está vacío, no se generan espacios dobles.

Se mantienen los cambios anteriores:
- NUMERO DE TRABAJO e INT TRABAJO retirados.
- FECHA, DIA y MES automáticos según la fecha actual.
- Domicilio en cascada: Departamento -> Provincia -> Distrito.
- Plazo final = plazo ingresado + periodo de gracia.
- Convenios, geografía, logos y PDF integrados en un único index.html.

Subir únicamente index.html a la raíz de GitHub Pages.
