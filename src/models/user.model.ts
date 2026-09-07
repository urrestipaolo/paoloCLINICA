import { prisma } from "../config/prisma";

export const userModel = {
  findAll: async () => {
    return await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        creadoEn: true,
      },
      orderBy: { id: "asc" },
    });
  },
  update: async (id: number, data: { email?: string; password?: string }) => {
    return await prisma.user.update({
      where: { id },
      data,
      omit: { password: true, id: true },
    });
  },
  delete: async (id: number) => {
    return await prisma.user.delete({
      where: { id },
    });
  },
};
