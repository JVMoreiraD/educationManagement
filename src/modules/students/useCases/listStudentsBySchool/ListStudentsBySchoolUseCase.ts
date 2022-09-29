import { IStudentsRepository } from "@modules/students/repositories/IStudentsRepository";

class ListStudentsBySchoolUseCase {
    constructor(private studentsRepository: IStudentsRepository) {}
    async execute(schools_id: string) {
        const students = await this.studentsRepository.listStudentsBySchool(
            schools_id
        );
        return students;
    }
}
export { ListStudentsBySchoolUseCase };
