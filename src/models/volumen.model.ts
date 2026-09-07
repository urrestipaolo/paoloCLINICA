import { prisma } from "../config/prisma";

export const volumenModel = {
  findAll: async () => {
    const especialidades = await prisma.especialidades.findMany({
      orderBy: { id: "asc" },
      select: {
        id: true,
        especialidad: true, // Cambia 'nombre' si tu columna se llama de otra forma (ej. 'descripcion')
        medico: {
          select: {
            _count: {
              select: {
                citaMedica: true, // Nombre de la relación en el modelo Medico
              },
            },
          },
        },
      },
    });
    
    // Mapeamos el resultado para sumar las citas de todos los médicos de esa especialidad
    return especialidades.map((esp) => {
      const totalCitas = esp.medico.reduce(
        (sum, medico) => sum + medico._count.citaMedica,
        0
      );

      return {
        id: esp.id,
        especialidad: esp.especialidad,
        totalCitas,
      };
    });
  },
};

