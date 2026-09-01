# MasterCalculadora — Cartas Poder + DXP — v5.46

## Publicación para GitHub Pages
Esta versión está preparada como **single-index**: todo el contenido necesario para las Cartas Poder y DXP está integrado dentro de `index.html`.

### Qué se corrigió en v5.46
- Se unificó la versión interna de la aplicación en **v5.46**.
- Se actualizó la versión visible al final de la página para que se sincronice con `APP_VERSION`.
- Se actualizaron los metadatos de versión para evitar inconsistencias entre HTML, JavaScript y `VERSION.txt`.
- Se conserva la integración de Cartas Poder y DXP dentro del mismo `index.html`, sin depender de una carpeta `DXP`.
- Se mantiene la lógica de DXP por convenio y la separación de ESSALUD Nuevo/Ampliación y Compra de Deuda.
- Esta versión parte de la implementación de la v5.45 y corrige exclusivamente la identificación/consistencia de versión y documentación de publicación.

## Estructura
```text
index.html
VERSION.txt
README_GITHUB.md
```

## Cómo publicar
1. Abrir el repositorio de GitHub.
2. Reemplazar el `index.html` por el de esta versión.
3. Reemplazar `VERSION.txt` y `README_GITHUB.md`.
4. Esperar a que GitHub Pages publique el cambio.
5. Hacer una recarga forzada del navegador (`Ctrl + F5`) para evitar caché del navegador.

## Verificación
Al cargar la página, el pie debe mostrar:
**Versión de la página: v5.46**
