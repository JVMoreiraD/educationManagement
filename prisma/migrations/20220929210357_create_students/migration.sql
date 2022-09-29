-- CreateTable
CREATE TABLE "students" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "registration" TEXT NOT NULL,
    "schools_id" TEXT NOT NULL,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_schools_id_fkey" FOREIGN KEY ("schools_id") REFERENCES "schools"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
