import { prisma } from "../config/prisma"

//LECTURA GET

export const medicoModel = {
    findAll: async () => {
        return await prisma.medicos.findMany({ orderBy: {id: "asc"}})
    },

    //CREACION DE MEDICOS POST
    create: async (
    medico: string,
    especialidadId: number,
    

    ) => {
    return await prisma.medicos.create(
      {
        data: {
          medico,
          especialidadId,
        }
      }
    )
  },


  //ACTUALIZACIÓN DEL MEDICO
  update: async (
    id: number,
    data: { 
      medico?: string;
      especialidadId?: number;  },
  ) => {
    return await prisma.medicos.update({
      where: { id },
      data,
    });
  },


  //ELIMINAR UN MEDICO
  delete: async (id: number) => {
    return await prisma.medicos.delete({
      where: { id },
    });
  },
}