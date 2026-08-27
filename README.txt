Generador Solicitud BBVA
Base estable: v4.86
Parche: v4.86.3

Cambios exclusivos:
- Carta Poder: no se borra ni redibuja el nombre del gestor; se conserva el
  valor correcto de la plantilla: PEDRO ARISTIDES CASTAÑEDA BERROCAL / DNI 44202466.
- PNP hoja 2: las casillas de reducción son gráficas. Se conserva el cuadro
  impreso y se dibuja la X solo dentro del cuadro seleccionado (cuota o plazo).
- Campos institucionales siempre visibles en la pantalla según convenio:
  Marina -> CIP
  Ejército -> TIN
  FAP -> CIP
  PNP -> TIN + CODOFIN.
- Los campos institucionales se guardan como data-field para reutilizarlos en
  la generación de documentos.
- No se agregan rectángulos blancos que tapen líneas o textos.
