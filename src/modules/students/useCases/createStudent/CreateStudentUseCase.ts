import { ICreateStudentDTO } from "@modules/students/dtos/ICreateStudentDTO";
import { IStudentsRepository } from "@modules/students/repositories/IStudentsRepository";

class CreateStudentUseCase {
    constructor(private studentsRepository: IStudentsRepository) {}
    async execute({ name, registration, schools_id }: ICreateStudentDTO) {
        const student = await this.studentsRepository.create({
            name,
            registration,
            schools_id,
        });
        return student;
    }
}
export { CreateStudentUseCase };
