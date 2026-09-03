# MasterCalculadora v6.03 — instalación en GitHub Pages

## IMPORTANTE
Sube **TODO EL CONTENIDO de esta carpeta**, no solo `index.html`.

La aplicación usa plantillas externas para evitar que `index.html` sea demasiado pesado. Debe quedar exactamente así:

```text
index.html
EJERCITO.pdf
MARINA.pdf
PNP.pdf
assets/
  pdf/
  dxp/
  img/
  data/
```

En especial, la carpeta `assets/dxp/` debe contener todas las plantillas DXP:
- ESSALUD_NEW.pdf
- ESSALUD_BUY.pdf
- MARINA.pdf
- MIDAGRI.pdf
- MINISTERIO_PUBLICO.pdf
- FAP.pdf
- SUB_CAFAE.pdf
- GENERAL.pdf
- RENIEC.pdf
- PODER_JUDICIAL.pdf
- HOSPITAL.pdf
- EJERCITO.pdf
- PNP.pdf

### Información v6.03
Las plantillas DXP ahora se cargan **bajo demanda**. Una plantilla DXP faltante ya no bloquea la carga inicial de toda la página. Si se intenta generar un DXP cuyo archivo no está en GitHub, el mensaje indicará la ruta exacta que falta.

### GitHub Pages
En el repositorio, `index.html` debe estar en la raíz y `assets` debe estar también en la raíz. Respeta mayúsculas/minúsculas en nombres y carpetas.
