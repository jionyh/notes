/*
  Warnings:

  - You are about to drop the `NotePermission` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "NotePermission" DROP CONSTRAINT "NotePermission_noteId_fkey";

-- DropForeignKey
ALTER TABLE "NotePermission" DROP CONSTRAINT "NotePermission_userId_fkey";

-- DropTable
DROP TABLE "NotePermission";
