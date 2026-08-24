VERSION 2.5

CORRECCIÓN DE TAMAÑO POR RECUADRO INDIVIDUAL

Ahora cada aparición del mismo campo calcula su tamaño de letra
independientemente según SU PROPIO recuadro.

Ejemplo:
- NOMBRES Y APELLIDOS en un recuadro grande: usa letra más grande.
- NOMBRES Y APELLIDOS en un recuadro pequeño: reduce solo esa aparición.
- DNI se ajusta según cada recuadro.
- No se usa un tamaño único para todas las apariciones.

Se utiliza un appearance provider personalizado de pdf-lib para evitar que
updateFieldAppearances vuelva a recalcular y sobrescriba el tamaño.

Subir únicamente index.html a GitHub Pages.
