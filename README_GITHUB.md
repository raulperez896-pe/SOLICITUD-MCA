# ACTUALIZACION CARTAS v5.48

Versión Single Index para GitHub Pages.

## Correcciones de esta versión
- ESSALUD DXP Nuevo/Ampliación: la fecha se renderiza una sola vez por página, sin duplicación del mes.
- ESSALUD DXP Compra de Deuda: la fecha se renderiza una sola vez en cada página y los campos repetidos entre páginas se limpian antes de dibujar los datos en la posición específica de cada hoja.
- Los campos compartidos del formulario no se usan para ESSALUD cuando generan apariciones duplicadas; se dibujan directamente dentro de sus posiciones reales y con ajuste automático de tamaño.
- Se conservan las líneas y el formato original de las plantillas.
- Todo el contenido sigue embebido en un único `index.html`.
