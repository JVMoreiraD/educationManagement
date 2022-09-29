import { ITeachersRepository } from "@modules/teachers/repositories/ITeachersRepository";

class ListTeachersBySchoolUseCase {
    constructor(private teachersRepository: ITeachersRepository) {}
    async execute(school_id: string) {
        const teachers = await this.teachersRepository.listTeacherBySchool(
            school_id
        );
        return teachers;
    }
}
export { ListTeachersBySchoolUseCase };
