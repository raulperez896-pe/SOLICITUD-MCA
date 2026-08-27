Generador Solicitud BBVA
Base: v4.86.15

Corrección de PDF MGP v4.86.16:
- Se mantiene el aplanado (flatten) de los campos.
- Se elimina la manipulación manual posterior de /Annots.
- Después de aplanar, las páginas se copian directamente con copyPages() al PDF
  final, conservando una estructura PDF válida para Adobe Acrobat.
- No se cambia la plantilla MGP ni los datos ya configurados.
Versión: v4.86.16
