import { Students } from "@prisma/client";

import { ICreateStudentDTO } from "../dtos/ICreateStudentDTO";

interface IStudentsRepository {
    create({
        id,
        name,
        registration,
        schools_id,
    }: ICreateStudentDTO): Promise<Students>;
    listStudentsBySchool(schools_id: string): Promise<Students[]>;
    deleteStudent(id: string): Promise<void>;
    findStudentById(id: string): Promise<Students>;
}
export { IStudentsRepository };
