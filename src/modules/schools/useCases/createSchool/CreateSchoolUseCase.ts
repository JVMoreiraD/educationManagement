import { injectable } from "tsyringe";

import { ISchoolsRepository } from "@modules/schools/repositories/ISchoolsRepository";

interface IRequest {
    name: string;
    address: string;
}

@injectable()
class CreateSchoolUseCase {
    constructor(private schoolsRepository: ISchoolsRepository) {}
    async execute({ name, address }: IRequest) {
        const school = await this.schoolsRepository.create({ name, address });

        return school;
    }
}

export { CreateSchoolUseCase };
