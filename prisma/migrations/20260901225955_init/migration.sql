-- AlterTable
ALTER TABLE "pacientes" ALTER COLUMN "email" SET DEFAULT '-';

-- CreateTable
CREATE TABLE "especialidades" (
    "id" SERIAL NOT NULL,
    "especialidad" TEXT NOT NULL,

    CONSTRAINT "especialidades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medicos" (
    "id" SERIAL NOT NULL,
    "medico" TEXT NOT NULL,
    "especialidadId" INTEGER NOT NULL,

    CONSTRAINT "medicos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "expedientes" (
    "id" SERIAL NOT NULL,
    "pacienteId" INTEGER NOT NULL,

    CONSTRAINT "expedientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "citas" (
    "id" SERIAL NOT NULL,
    "pacienteId" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "medicoId" INTEGER NOT NULL,

    CONSTRAINT "citas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estadoCitas" (
    "id" SERIAL NOT NULL,
    "citaId" INTEGER NOT NULL,
    "estado" TEXT NOT NULL,

    CONSTRAINT "estadoCitas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "expedientes_pacienteId_key" ON "expedientes"("pacienteId");

-- CreateIndex
CREATE UNIQUE INDEX "citas_pacienteId_key" ON "citas"("pacienteId");

-- CreateIndex
CREATE UNIQUE INDEX "citas_medicoId_key" ON "citas"("medicoId");

-- CreateIndex
CREATE UNIQUE INDEX "estadoCitas_citaId_key" ON "estadoCitas"("citaId");

-- AddForeignKey
ALTER TABLE "medicos" ADD CONSTRAINT "medicos_especialidadId_fkey" FOREIGN KEY ("especialidadId") REFERENCES "especialidades"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "expedientes" ADD CONSTRAINT "expedientes_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "pacientes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "citas" ADD CONSTRAINT "citas_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "pacientes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "citas" ADD CONSTRAINT "citas_medicoId_fkey" FOREIGN KEY ("medicoId") REFERENCES "medicos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "estadoCitas" ADD CONSTRAINT "estadoCitas_citaId_fkey" FOREIGN KEY ("citaId") REFERENCES "citas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
