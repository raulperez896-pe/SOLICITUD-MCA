Generador Solicitud BBVA
Versión de la página: v4.87

Correcciones:
- El área de datos institucionales ahora se inicializa DESPUÉS de cargar convenios,
  por lo que se muestra correctamente al seleccionar Marina, Ejército, FAP o PNP.
- Marina de Guerra -> CIP
- Ejército del Perú -> TIN
- Fuerza Aérea del Perú -> CIP
- PNP -> TIN + CODOFIN
- Los campos utilizan data-field y forman parte de values() para la generación.
- Nombre del gestor usa PEDRO ARISTIDES CASTAÑEDA BERROCAL con Ñ explícita.
- Los campos dibujados en Carta Poder limpian únicamente su zona de datos, no
  cubren el documento completo.
- Se mantiene el resto de la lógica existente.
