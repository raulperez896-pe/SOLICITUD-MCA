# MCA Cartas – DXP v5.78

Versión integral corregida para generación de DXP de Marina, Ejército y PNP.

**Versión de entrega: v5.78.**

## Correcciones de esta versión

### v5.78 – ajustes finales de Marina
- Hoja 5: dirección con tipografía uniforme y autoajuste.
- Hoja 6: fecha completa en la línea de LUGAR Y FECHA.
- Hoja 7: se eliminan duplicidades de campos AcroForm antes del aplanado; cada dato se dibuja una sola vez en su línea original. PRESTAMO POR CONVENIO queda en la línea inmediatamente posterior al concepto de descuentos, sin cubrir texto.

### Marina de Guerra del Perú
- **Hoja 1:** el nombre de la entidad financiera de compra de deuda se genera como texto PDF dentro de la celda original, con autoajuste proporcional; además se trasladan las deudas de BOLETA.
- **Hojas 1, 2, 3, 5, 6 y 7:** los datos se generan como texto PDF con ajuste proporcional dentro de las líneas originales; no se generan imágenes ni se colocan fondos blancos.
- **Hoja 7:** nombre, cargo, instituto, CIP y DNI se generan como texto PDF dentro de sus espacios originales, sin recortes ni tamaños desproporcionados.
- **CIP hoja 7:** el campo correcto es `Text2`; ahora recibe exclusivamente el número de CIP ingresado en la plantilla. Ya no se muestra `ACTIVIDAD` en el lugar del CIP.
- **Texto PRESTAMO POR CONVENIO:** se coloca exactamente sobre la línea posterior a “Autorizo al BANCO BBVA PERÚ, a efectuar descuentos por el concepto de”, sin cubrir el documento.
- Se incorporó **autoajuste de tipografía por ancho real del campo**, reduciendo el tamaño únicamente cuando el texto es largo.
- No se utilizan rectángulos blancos, imágenes ni coberturas para corregir los datos de Marina.

### Ejército
- Se mantiene la corrección del CIP para que el campo `Text2` tome el número ingresado en la plantilla.

### PNP
- Se mantiene la lógica de ajuste automático de tamaño para textos largos y las correcciones realizadas en la v5.78.

## Publicación
Subir `index.html` y los PDF incluidos al repositorio de GitHub Pages.
