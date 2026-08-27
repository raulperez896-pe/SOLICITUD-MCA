Generador Solicitud BBVA
Base estable: v4.86
Parche: v4.86.2

Solo se corrigieron los puntos solicitados:
1. Se mantiene la base de generación estable v4.86 para no volver a mover líneas.
2. Los campos institucionales aparecen según convenio en la pantalla de datos:
   - Marina de Guerra -> CIP
   - Ejército del Perú -> TIN
   - Fuerza Aérea del Perú -> CIP
   - PNP -> TIN + CODOFIN
3. Los campos institucionales se guardan con data-field y se reutilizan en documentos.
4. Carta Poder: nombres, banco, DNI, dirección y fecha se escriben en los campos
   existentes de la plantilla, ajustando el tamaño sin pintar sobre líneas o cuadros.
5. En PNP se agrega TIN + CODOFIN en "Otros datos (opcional)" solo si fueron ingresados.
6. En Ejército se agrega TIN en "Otros datos (opcional)" solo si fue ingresado.
7. MGP utiliza el CIP del nuevo campo y conserva la plantilla existente.
8. Gestor: PEDRO ARISTIDES CASTAÑEDA BERROCAL.
9. No se agregaron rectángulos blancos sobre áreas generales del documento.
