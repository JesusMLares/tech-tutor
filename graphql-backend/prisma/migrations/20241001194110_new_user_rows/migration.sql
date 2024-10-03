-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_postId_fkey";

-- AlterTable
ALTER TABLE "Appointment" ALTER COLUMN "postId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "hourlyRate" DOUBLE PRECISION,
ADD COLUMN     "isAvailable" BOOLEAN DEFAULT false,
ADD COLUMN     "rating" DOUBLE PRECISION,
ADD COLUMN     "skills" TEXT[];

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;
