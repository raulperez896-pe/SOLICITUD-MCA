# Actualización Cartas / DXP v5.49

Paquete Single Index para GitHub Pages.

## Archivos
- `index.html` — aplicación completa con Cartas Poder y DXP integrados.
- `VERSION.txt` — versión de la publicación.

## Publicación
Subir únicamente estos archivos a la raíz del repositorio de GitHub Pages.
No se requiere una carpeta DXP externa: las plantillas están embebidas en `index.html`.

## Corrección principal
Se restauraron las funciones `fetchDxpBytes()` y `renderDXPExtras()` que se habían perdido/corrompido, causando el error `fetchDxpBytes is not defined` y evitando que aparecieran los campos adicionales DXP.
