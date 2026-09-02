# MCA Cartas – DXP v5.70

Versión integral corregida para generación de DXP de Marina, Ejército y PNP.

## Correcciones de esta versión

### Marina de Guerra del Perú
- **Hoja 1:** el nombre de la entidad financiera de compra de deuda se ajusta automáticamente al ancho real del campo; no se recorta.
- **Hoja 2:** los datos utilizan los campos originales de la plantilla; no se generan imágenes ni se colocan fondos blancos sobre el documento.
- **Hoja 7:** el nombre, cargo, instituto, CIP y DNI se escriben mediante los campos originales del PDF.
- **CIP hoja 7:** el campo correcto es `Text2`; ahora recibe exclusivamente el número de CIP ingresado en la plantilla. Ya no se muestra `ACTIVIDAD` en el lugar del CIP.
- **Texto PRESTAMO POR CONVENIO:** se eliminó la inserción adicional que aparecía en medio de la línea de la hoja 7.
- Se incorporó **autoajuste de tipografía por ancho real del campo**, reduciendo el tamaño únicamente cuando el texto es largo.
- No se utilizan rectángulos blancos, imágenes ni coberturas para corregir los datos de Marina.

### Ejército
- Se mantiene la corrección del CIP para que el campo `Text2` tome el número ingresado en la plantilla.

### PNP
- Se mantiene la lógica de ajuste automático de tamaño para textos largos y las correcciones realizadas en la v5.69.

## Publicación
Subir `index.html` y los PDF incluidos al repositorio de GitHub Pages.
