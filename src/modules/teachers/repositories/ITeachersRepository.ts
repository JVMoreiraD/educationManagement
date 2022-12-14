import { Teachers } from "@prisma/client";

import { ICreateTeachersDTO } from "../dtos/ICreateTeacherDTO";

interface ITeachersRepository {
    create({ id, name, school_id }: ICreateTeachersDTO): Promise<Teachers>;
    listTeacherBySchool(school_id: string): Promise<Teachers[]>;
    listAllTeaches(): Promise<Teachers[]>;
    deleteTeacher(id: string): Promise<void>;
    findTeacherById(id: string): Promise<Teachers>;
    changeTeachersName(id: string, newName: string): Promise<Teachers>;
}

export { ITeachersRepository };
