import { Classes } from "@prisma/client";

import { ICreateClassesDTO } from "../dtos/ICreateClassesDTO";

interface IClassesRepositories {
    create({
        grade,
        description,
        school_id,
        shift,
        students_id,
        teacher_id,
    }: ICreateClassesDTO): Promise<Classes>;
    findClassesBySchool(school_id: string): Promise<Classes[]>;
    deleteClasse(id: string): Promise<void>;
    findClassesById(id: string): Promise<Classes>;
}

export { IClassesRepositories };
