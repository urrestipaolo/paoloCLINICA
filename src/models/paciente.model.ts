import { prisma } from "../config/prisma"

//LECTURA DEL PACIENTE
export const pacienteModel = {

//LECTURA CON FILTRO
findAll: async () => { 
    return await prisma.pacientes.findMany({
      orderBy: { id: "asc"},
      include: {
        cita: {
          select: {
            medicoCita: {
              select: {
                medico: true,
                especialidad: true,
              }
            },
            fecha: true,
            estado: true,
          },
        }
      }}) },



//CREACION DE PACIENTES POST
  create: async (
    nombre: string,
    apPaterno: string,
    apMaterno: string,
    telefono: string,
    email: string,
    fechaNacimiento: string,

  ) => {
    return await prisma.pacientes.create(
      {
        data: {
          nombre,
          apPaterno,
          apMaterno,
          telefono,
          email,
          fechaNacimiento: new Date(fechaNacimiento),
        }
      }
    )
  },



  //ACTUALIZACIÓN DE DATOS
  update: async (
    id: number,
    data: { 
      nombre?: string; 
      apPaterno?: string; 
      apMaterno?: string; 
      telefono?: string; 
      email?: string; 
      fechaNacimiento?: Date; },
  ) => {
    return await prisma.pacientes.update({
      where: { id },
      data,
    });
  },


  
  //ELIMINAR PACIENTE
  delete: async (id: number) => {
    return await prisma.pacientes.delete({
      where: { id },
    });
  },
}

