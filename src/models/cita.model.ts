import { prisma } from "../config/prisma"

//LECTURA


export const citaModel = {
    findAllwhitFilters: async () => {
        const citax = await prisma.citas.findMany({
            include: {
                pacienteCita: {
                    select: {
                        nombre: true,
                        apPaterno: true,
                        apMaterno: true,
                    }
                },
                medicoCita: {
                    select: {
                        medico: true,
                    }
                },
            }
        }
    )
    return citax.map((cita) => ({
      ...cita,
      fecha: cita.fecha instanceof Date 
        ? cita.fecha.toISOString().split("T")[0] // Convierte "2026-10-13T00:00:00.000Z" en "2026-10-13"
        : cita.fecha,
    }));
  },
    
    
    //LECTURA NORMAL
    findAll: async () => {
        return await prisma.citas.findMany({ orderBy: {id: "asc"}})
    },

    //BUSQUEDA DEL TOTAL DE CITAS POR FECHA
    findByEstadoFecha: async (fechaString: string) => {
    const inicioDia = new Date(`${fechaString}T00:00:00.000Z`);
    const finDia = new Date(`${fechaString}T23:59:59.999Z`);

    // Hacemos el conteo en paralelo para 'Completado' y 'Cancelado'
    const [completadas, canceladas] = await Promise.all([
      prisma.citas.count({
        where: {
          fecha: { gte: inicioDia, lte: finDia },
          // Cambia el ID o nombre según cómo manejes la relación de estado en tu BD
          estado: "completado", 
        },
      }),
      prisma.citas.count({
        where: {
          fecha: { gte: inicioDia, lte: finDia },
          estado: "cancelado",
        },
      }),
    ]);

    return {
      fecha: fechaString,
      completadas,
      canceladas,
    };
  },


//CREACION DE CITAS
    create: async (
    pacienteId: number,
    fecha: Date,
    estado: string,
    medicoId: number



  ) => {
    return await prisma.citas.create(
      {
        data: {
          pacienteId,
          fecha,
          estado,
          medicoId
        }
      }
    )
  },


  //ACTUALIZACIÓN DE CITAS
  update: async (
    id: number,
    data: { 
      pacienteId?: number;
      fecha?: Date;
      estado?: string;
      medicoId?: number;  },
  ) => {
    return await prisma.citas.update({
      where: { id },
      data,
    });
  },


  
  //ELIMINAR UNA CITA
  delete: async (id: number) => {
    return await prisma.citas.delete({
      where: { id },
    });
  },
}
