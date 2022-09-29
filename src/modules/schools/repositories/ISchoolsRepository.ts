import { Schools } from "@prisma/client";

import { ICreateSchoolDTO } from "../dtos/ICreateSchoolsDTO";

interface ISchoolsRepository {
    create({ id, address, name }: ICreateSchoolDTO): Promise<Schools>;
    listSchools(): Promise<Schools[]>;
    deleteSchool(id: string): Promise<void>;
    findSchool(id: string): Promise<Schools>;
}
export { ISchoolsRepository };
