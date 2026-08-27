Generador Solicitud BBVA
Base: v4.86 estable
Parche: v4.86.2

Correcciones solicitadas:
- Se elimina la lógica de borrar/dibujar sobre los cuadros de reducción que estaba
  tapando letras. La reducción usa los casilleros reales del PDF: se desmarcan ambos
  y se marca únicamente la opción seleccionada antes de aplanar.
- No se repintan ni se cubren las líneas del documento para nombres, bancos o datos.
- Se conserva la plantilla estable v4.86 y el gestor CASTAÑEDA.
- Campos institucionales predictivos y guardados:
  Marina de Guerra -> CIP
  Ejército del Perú -> TIN
  Fuerza Aérea del Perú -> CIP
  PNP -> TIN + CODOFIN
- Los identificadores se reutilizan en la Carta Poder cuando existe una posición
  predefinida o en la línea de Otros datos de la plantilla, sin cubrir texto.
- FAP usa la plantilla general de Carta Poder disponible en el ZIP.
