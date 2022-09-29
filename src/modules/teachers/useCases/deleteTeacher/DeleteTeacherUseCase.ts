import { ITeachersRepository } from "@modules/teachers/repositories/ITeachersRepository";
import { AppError } from "@shared/errors/AppError";

class DeleteTeacherUseCase {
    constructor(private teachersRepository: ITeachersRepository) {}

    async execute(id: string) {
        const teacherExists = await this.teachersRepository.findTeacherById(id);
        if (!teacherExists) {
            throw new AppError("Professor não existe");
        }

        await this.teachersRepository.deleteTeacher(id);
    }
}

export { DeleteTeacherUseCase };
