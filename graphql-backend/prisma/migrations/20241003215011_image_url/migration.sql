/*
  Warnings:

  - Made the column `firstName` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastName` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "imageUrl" TEXT NOT NULL DEFAULT 'https://img.icons8.com/?size=100&id=ckaioC1qqwCu&format=png&color=000000',
ALTER COLUMN "firstName" SET NOT NULL,
ALTER COLUMN "lastName" SET NOT NULL;
