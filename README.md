# Generador de Solicitud BBVA v1.2

## Estructura obligatoria

Subir estos archivos directamente a la raíz del repositorio:

- index.html
- styles.css
- app.js
- SOLICITUD.pdf
- .nojekyll

## Cambio principal de v1.2

La plantilla PDF se encuentra en la raíz y la página la busca con una URL relativa a GitHub Pages:

`./SOLICITUD.pdf`

Esto evita el problema de rutas que estaba produciendo el mensaje "No se pudo cargar assets/SOLICITUD.pdf".

## Interfaz

Se eliminó por completo la sección "Campos automáticos". El usuario solo ve:

1. Selección inicial / desplegables.
2. Datos a llenar.

Las casillas y valores automáticos se aplican únicamente al generar el PDF.

## Automáticos

Se marca con X:

- FAMILIAR
- DEPENDIENTE
- CORREO ELECTRÓNICO
- Afiliar  Enviar
- ELECTRÓNICO
- No
- No_2
- No_3
- No_4
- CANAL DE VENTA  OFICINA

Se escribe:

- TIEMPO DE RESIDENCIA = 10 AÑOS

## Publicación

En GitHub Pages, el repositorio debe quedar exactamente con SOLICITUD.pdf en la raíz.
