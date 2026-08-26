Generador Solicitud BBVA
Versión de la página: v4.72

Corrección crítica Carta Poder:
- Se elimina la combinación directa de páginas con copyPages.
- Cada juego se aplana, se serializa y se vuelve a abrir.
- Cada página se embebe como contenido gráfico en una página nueva del PDF final.
- Esto evita referencias cruzadas de AcroForm/annotations que provocaban en Adobe:
  "Error al procesar página. Problema al leer el documento (18)".
- Se mantiene la selección de plantilla específica por convenio.
- Un juego por cada préstamo.
