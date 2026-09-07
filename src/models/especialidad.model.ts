import { prisma } from "../config/prisma"


export const especialidadModel = {
    //LECTURA GET
    findAll: async () => {
        return await prisma.especialidades.findMany({ orderBy: {id: "asc"}})
    },


    //CREACION DE especialidades POST
    create: async (
    especialidad: string

  ) => {
    return await prisma.especialidades.create(
      {
        data: {
          especialidad
        }
      }
    )
  },


  //ACTUALIZACIÓN DE ESPECIALIDADES
  update: async (
    id: number,
    data: { 
      especialidad?: string;  },
  ) => {
    return await prisma.especialidades.update({
      where: { id },
      data,
    });
  },


  //ELIMINAR UNA ESPECIALIDAD
  delete: async (id: number) => {
    return await prisma.especialidades.delete({
      where: { id },
    });
  },
}
