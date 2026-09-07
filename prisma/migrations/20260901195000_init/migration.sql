/*
  Warnings:

  - You are about to drop the column `apPateno` on the `pacientes` table. All the data in the column will be lost.
  - Added the required column `apPaterno` to the `pacientes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pacientes" DROP COLUMN "apPateno",
ADD COLUMN     "apPaterno" TEXT NOT NULL;
