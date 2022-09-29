import { injectable } from "tsyringe";

import { ISchoolsRepository } from "@modules/schools/repositories/ISchoolsRepository";
import { SchoolsRepository } from "@modules/schools/repositories/SchoolsRepository";

interface IRequest {
    name: string;
    address: string;
}

@injectable()
class CreateSchoolUseCase {
    constructor(private schoolsRepository: ISchoolsRepository) {}
    async execute({ name, address }: IRequest) {
        const schoolsRepository = new SchoolsRepository();

        const school = await schoolsRepository.create({ name, address });

        return school;
    }
}

export { CreateSchoolUseCase };
