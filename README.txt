VERSION 4.3

SE INCORPORA DPS (DECLARACIÓN PERSONAL DE SEGUROS)

DATOS NUEVOS:
- Nacionalidad: desplegable, PERUANO como primera opción y valor por defecto.
- Talla.
- Peso.
- Fecha de nacimiento: se reutiliza el campo que ya existía en la solicitud.

AUTOMÁTICOS EN DPS:
- Apellidos, nombres, DNI, cargo, celular.
- Giro del convenio.
- Monto.
- Plazo con periodo de gracia.
- Oficina.
- Ciudad.
- Fecha actual.
- Tipo de préstamo = CONVENIO.
- Moneda = SOLES.
- Tipo de seguro según modalidad.
- El cónyuge NO se llena.

CUESTIONARIO:
Se añadió en la página un bloque para el TITULAR con Sí/No:
1. Salud/tratamientos/enfermedades indicadas.
2. Otras enfermedades.
3. Antecedentes de ambos padres antes de 60 años.
4. Embarazo.
5a. Fuma.
5b. Alcohol diariamente.
6. Actividad laboral/deportiva de riesgo.
Además aparecen campos opcionales para mes de gestación, cigarros/día y actividad de riesgo.

BOTONES:
- Generar Solicitud PDF
- Generar DPS PDF

El DPS se genera con los datos autocompletados y se deja en solo lectura.
No se utiliza flatten().


CAMBIO v4.2:
Los datos nuevos de DPS están en un apartado independiente '3. DPS — Declaración Personal de Seguros'. No se mezclan con Datos personales, laborales u operación. Datos finales pasan a la sección 4.


CAMBIO v4.3:
FECHA DE NACIMIENTO vuelve a Datos a llenar como campo principal. En el apartado DPS solo se muestra como dato reutilizado automáticamente; no se crea una segunda captura. El generador DPS toma el valor del campo principal.
