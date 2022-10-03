import { ISchoolsRepository } from "@modules/schools/repositories/ISchoolsRepository";

class ChangeSchoolsNameUseCase {
    constructor(private schoolsRepository: ISchoolsRepository) {}

    async execute(id: string, newName: string) {
        const schools = await this.schoolsRepository.changeSchoolsName(
            id,
            newName
        );
        return schools;
    }
}

export { ChangeSchoolsNameUseCase };
