import { ITeachersRepository } from "@modules/teachers/repositories/ITeachersRepository";

class ChangeTeachersNameUseCase {
    constructor(private teachersRepository: ITeachersRepository) {}

    async execute(id: string, newName: string) {
        const teacher = await this.teachersRepository.changeTeachersName(
            id,
            newName
        );
        return teacher;
    }
}

export { ChangeTeachersNameUseCase };
