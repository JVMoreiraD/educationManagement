import { injectable } from "tsyringe";

import { ISchoolsRepository } from "@modules/schools/repositories/ISchoolsRepository";

@injectable()
class ListSchoolsUseCase {
    constructor(private schoolsRepository: ISchoolsRepository) {}
    async execute() {
        const school = await this.schoolsRepository.listSchools();

        return school;
    }
}

export { ListSchoolsUseCase };
