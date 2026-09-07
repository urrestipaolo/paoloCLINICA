-- CreateTable
CREATE TABLE "pacientes" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apPateno" TEXT NOT NULL,
    "apMaterno" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "email" TEXT,
    "fechaNacimiento" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pacientes_pkey" PRIMARY KEY ("id")
);
