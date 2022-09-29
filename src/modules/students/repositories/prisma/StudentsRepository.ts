import { ICreateStudentDTO } from "@modules/students/dtos/ICreateStudentDTO";
import { Students } from "@prisma/client";
import { prisma } from "@shared/infra/database/prismaClient";

import { IStudentsRepository } from "../IStudentsRepository";

class StudentsRepository implements IStudentsRepository {
    async create({
        id,
        name,
        registration,
        schools_id,
    }: ICreateStudentDTO): Promise<Students> {
        const student = await prisma.students.create({
            data: {
                id,
                name,
                registration,
                schools_id,
            },
        });
        return student;
    }
    async listStudentsBySchool(schools_id: string): Promise<Students[]> {
        const students = await prisma.students.findMany({
            where: {
                schools_id,
            },
        });
        return students;
    }
    async deleteStudent(id: string): Promise<void> {
        await prisma.students.delete({ where: { id } });
    }
}
export { StudentsRepository };
