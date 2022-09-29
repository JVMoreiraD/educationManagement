import { ICreateTeachersDTO } from "@modules/teachers/dtos/ICreateTeacherDTO";
import { Teachers } from "@prisma/client";
import { prisma } from "@shared/infra/database/prismaClient";

import { ITeachersRepository } from "../ITeachersRepository";

class TeachersRepository implements ITeachersRepository {
    async findTeacherById(id: string): Promise<Teachers> {
        const teacher = await prisma.teachers.findUnique({ where: { id } });
        return teacher;
    }
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
            include: { school: true },
        });
        return teachers;
    }
    async listAllTeaches(): Promise<Teachers[]> {
        const teachers = await prisma.teachers.findMany({
            include: { school: true },
        });
        return teachers;
    }
    async deleteTeacher(id: string): Promise<void> {
        await prisma.teachers.delete({
            where: { id },
        });
    }
}

export { TeachersRepository };
