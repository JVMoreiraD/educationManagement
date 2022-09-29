import { Schools } from "@prisma/client";
import { prisma } from "@shared/infra/database/prismaClient";

import { ICreateSchoolDTO } from "../dtos/ICreateSchoolsDTO";
import { ISchoolsRepository } from "./ISchoolsRepository";

class SchoolsRepository implements ISchoolsRepository {
    async create({ address, name }: ICreateSchoolDTO) {
        const school = await prisma.schools.create({
            data: {
                name,
                address,
            },
        });
        return school;
    }
    async listSchools(): Promise<Schools[]> {
        const schools = await prisma.schools.findMany();
        return schools;
    }
}
export { SchoolsRepository };
