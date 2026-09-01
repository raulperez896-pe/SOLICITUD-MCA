# Cartas Poder + DXP — v5.39

Versión basada directamente en v5.37. Se modifica únicamente la generación de la **Carta de Compra de Deuda / Carta de Subrogación** para evitar duplicación de datos de la plantilla (nombres de supervisor/promotor y DNI del supervisor). Los campos del formulario se aplanan primero y luego se limpia únicamente la zona comercial antes de dibujar una sola vez los datos correctos.

Todo el contenido está integrado dentro de `index.html`; no se requiere carpeta DXP ni archivos PDF adicionales.

Para GitHub Pages, subir `index.html`, `VERSION.txt` y este README a la raíz del repositorio.
