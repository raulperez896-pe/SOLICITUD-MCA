Generador BBVA - versión v4.86.33

Corrección principal:
- La página ya NO carga PDF-Lib durante la inicialización.
- El estado inicial debe pasar de “Inicializando...” a “Lista de convenios cargada...” incluso sin acceso a CDN.
- PDF-Lib se carga únicamente cuando el usuario genera un PDF que lo necesita.
- No se modifica la lógica de datos de Solicitud/DPS/CD.
- La versión visible queda al final de la página.

Nota: para generar PDF en los módulos que requieren PDF-Lib, la aplicación todavía puede necesitar acceso al CDN configurado. Esta corrección evita que esa dependencia bloquee el arranque de toda la aplicación.
