VERSION 2.6

CAMBIOS:
1. Ajuste de tamaño de letra más estable:
   - Usa el recuadro más pequeño del mismo campo.
   - Mide el ancho real de Helvetica.
   - Deja margen interior.
   - Usa updateAppearances estándar para evitar campos que quedan en blanco.

2. NOMBRES Y APELLIDOS:
   - Se genera automáticamente como:
     PRIMER NOMBRE + SEGUNDO NOMBRE + APELLIDO PATERNO + APELLIDO MATERNO.
   - Se agregó un fallback directo de los controles visibles.

3. INFORMACIÓN AUTOMÁTICA:
   - La barra informativa del convenio queda oculta en la página.
   - Los datos siguen utilizándose internamente y se colocan en el PDF.

4. PDF FINAL:
   - Antes de guardar se ejecuta flatten().
   - El PDF descargado queda como impresión fija y NO permite modificar
     los campos AcroForm.

Subir únicamente index.html a GitHub Pages.
