import { IStudentsRepository } from "@modules/students/repositories/IStudentsRepository";
import { AppError } from "@shared/errors/AppError";

class DeleteStudentUseCase {
    constructor(private studentsRepository: IStudentsRepository) {}
    async execute(id: string): Promise<void> {
        const studentExists = await this.studentsRepository.findStudentById(id);
        if (!studentExists) {
            throw new AppError("Estudante não encontrado");
        }
        await this.studentsRepository.deleteStudent(id);
    }
}
export { DeleteStudentUseCase };
