import { IStudentsRepository } from "@modules/students/repositories/IStudentsRepository";

class ChangeStudentsNameUseCase {
    constructor(private studentsRepository: IStudentsRepository) {}

    async execute(id: string, newName: string) {
        const school = await this.studentsRepository.changeStudentsName(
            id,
            newName
        );
        return school;
    }
}
export { ChangeStudentsNameUseCase };
