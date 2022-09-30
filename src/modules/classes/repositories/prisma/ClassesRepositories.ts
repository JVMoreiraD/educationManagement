import { ICreateClassesDTO } from "@modules/classes/dtos/ICreateClassesDTO";
import { Classes } from "@prisma/client";
import { prisma } from "@shared/infra/database/prismaClient";

import { IClassesRepositories } from "../IClassesRepositories";

class ClassesRepositories implements IClassesRepositories {
    async findClassesById(id: string): Promise<Classes> {
        const classes = await prisma.classes.findUnique({ where: { id } });
        return classes;
    }
    async create({
        grade,
        description,
        school_id,
        shift,
        students_id,
        teacher_id,
    }: ICreateClassesDTO): Promise<Classes> {
        const classes = await prisma.classes.create({
            data: {
                grade,
                description,
                shift,
                school_id,
                teacher_id,
                students: {
                    connect: students_id.map((value) => {
                        return { id: value };
                    }),
                },
            },
            include: {
                students: true,
            },
        });
        return classes;
    }
    async findClassesBySchool(school_id: string): Promise<Classes[]> {
        const classes = await prisma.classes.findMany({ where: { school_id } });

        return classes;
    }
    async deleteClasse(id: string): Promise<void> {
        await prisma.classes.delete({ where: { id } });
    }
}
export { ClassesRepositories };
