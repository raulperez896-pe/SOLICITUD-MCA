Generador Solicitud BBVA
Base: v4.86.13

Corrección v4.86.15:
- Se mantiene la Carta Poder MGP con el gestor dibujado.
- Se corrigió el error que podía producir PDFs ilegibles para Adobe Acrobat:
  las imágenes de nombre y DNI ahora se incrustan en el documento fuente (src)
  antes de copiar las páginas al PDF final.
- No se utiliza un objeto de imagen perteneciente a finalDoc dentro de src.
- No se modifican las demás plantillas ni la lógica.
