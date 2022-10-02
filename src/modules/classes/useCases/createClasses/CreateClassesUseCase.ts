import { ICreateClassesDTO } from "@modules/classes/dtos/ICreateClassesDTO";
import { IClassesRepositories } from "@modules/classes/repositories/IClassesRepositories";

class CreateClassesUseCase {
    constructor(private classesRepository: IClassesRepositories) {}
    async execute({
        grade,
        description,
        school_id,
        shift,
        students_id,
        teacher_id,
    }: ICreateClassesDTO) {
        const classes = await this.classesRepository.create({
            grade,
            description,
            school_id,
            shift,
            students_id,
            teacher_id,
        });
        return classes;
    }
}
export { CreateClassesUseCase };
