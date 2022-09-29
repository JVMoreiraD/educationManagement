import { ISchoolsRepository } from "@modules/schools/repositories/ISchoolsRepository";
import { AppError } from "@shared/errors/AppError";

class DeleteSchoolUseCase {
    constructor(private schoolsRepository: ISchoolsRepository) {}
    async execute(id: string) {
        const schoolExists = await this.schoolsRepository.findSchool(id);

        if (!schoolExists) {
            throw new AppError("school doesn't exists");
        }

        await this.schoolsRepository.deleteSchool(id);
    }
}

export { DeleteSchoolUseCase };
