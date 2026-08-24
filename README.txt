VERSION 3.0

CORRECCION DEL LLENADO DE DATOS

El flujo de PDF ahora es:
1. Mapear nombres reales de campos ignorando mayúsculas/minúsculas y espacios externos.
2. Escribir TODOS los valores en los campos.
3. Actualizar TODAS las apariencias una sola vez.
4. Activar SOLO LECTURA.
5. Guardar sin flatten y con useObjectStreams:false.

Esto evita que updateAppearances individual sobrescriba o deje vacíos campos
repetidos como NOMBRES Y APELLIDOS, DNI, DIRECCION, etc.

No se usa flatten().
