import { ICreateTeachersDTO } from "@modules/teachers/dtos/ICreateTeacherDTO";
import { Teachers } from "@prisma/client";
import { prisma } from "@shared/infra/database/prismaClient";

import { ITeachersRepository } from "../ITeachersRepository";

class TeachersRepository implements ITeachersRepository {
    async create({
        id,
        name,
        school_id,
    }: ICreateTeachersDTO): Promise<Teachers> {
        const teacher = await prisma.teachers.create({
            data: {
                id,
                name,
                school_id,
            },
        });
        return teacher;
    }
    async listTeacherBySchool(school_id: string): Promise<Teachers[]> {
        const teachers = await prisma.teachers.findMany({
            where: { school_id },
        });
        return teachers;
    }
    async listAllTeaches(): Promise<Teachers[]> {
        const teachers = await prisma.teachers.findMany();
        return teachers;
    }
    async deleteTeacher(id: string): Promise<void> {
        await prisma.teachers.delete({ where: { id } });
    }
}

export { TeachersRepository };
