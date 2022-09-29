import { injectable } from "tsyringe";

import { SchoolsRepository } from "@modules/schools/repositories/SchoolsRepository";

@injectable()
class ListSchoolsUseCase {
    async execute() {
        const schoolsRepository = new SchoolsRepository();

        const school = await schoolsRepository.listSchools();

        return school;
    }
}

export { ListSchoolsUseCase };
