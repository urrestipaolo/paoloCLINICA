------ MODULO DE RECEPCION -------

PACIENTES
.ID
.nombre
.apellidos
.telefono
.email
.fecha de nacimiento

MEDICOS
.ID
.nombre
.id_especialidad (fk)

Expediente
.ID
.id_paciente (fk)
.historial de citas

Especialidades
.ID
.especialidad

------- MODULO DE CONSULTORIO --------

Cita
.ID
.id_paciente (fk)
.id_medico (fk)
.fecha_cita
.estado

Agenda medica
.ID
.id_paciente (fk)
.fecha

-------- MODULO DE GERENCIA -----------

Rentabilidad (VOLUMEN)
.ID
.citas (fk)
.especialidad (fk)

OPERATIVO DIARIO (FECHAS)
.ID
.citas (fk)
.filtro_fechas