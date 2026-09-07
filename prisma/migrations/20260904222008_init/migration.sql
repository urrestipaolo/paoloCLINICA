/*
  Warnings:

  - You are about to drop the `estadoCitas` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "estadoCitas" DROP CONSTRAINT "estadoCitas_citaId_fkey";

-- AlterTable
ALTER TABLE "citas" ADD COLUMN     "estado" TEXT NOT NULL DEFAULT 'pendiente';

-- DropTable
DROP TABLE "estadoCitas";
