# Generador de Solicitud BBVA – GitHub Pages v1.1

## Corrección de esta versión
- Detecta los campos AcroForm reales del PDF.
- Si `assets/SOLICITUD.pdf` no existe, intenta también `./assets/SOLICITUD.pdf`, `SOLICITUD.pdf` y `./SOLICITUD.pdf`.
- Muestra el error HTTP exacto cuando GitHub no encuentra el PDF.
- Usa CDN de pdf-lib con respaldo entre jsDelivr y unpkg.
- Incluye `.nojekyll`.
- Mantiene los nombres internos de los campos.
- Muestra los campos de texto detectados en el orden del PDF.
- Marca automáticamente las casillas definidas y coloca `TIEMPO DE RESIDENCIA = 10 AÑOS`.

## Estructura obligatoria
```
index.html
styles.css
app.js
.nojekyll
assets/
  SOLICITUD.pdf
```

## GitHub Pages
Sube TODOS los archivos y la carpeta `assets` manteniendo la estructura. Luego:
Settings → Pages → Deploy from a branch → main → / (root).

Si el Estado muestra `HTTP 404`, el PDF no está ubicado en `assets/SOLICITUD.pdf` en el repositorio.
