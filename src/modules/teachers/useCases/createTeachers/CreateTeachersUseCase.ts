import { ICreateTeachersDTO } from "@modules/teachers/dtos/ICreateTeacherDTO";
import { ITeachersRepository } from "@modules/teachers/repositories/ITeachersRepository";

class CreateTeachersUseCase {
    constructor(private teachersRepository: ITeachersRepository) {}

    async execute({ id, school_id, name }: ICreateTeachersDTO) {
        const teacher = await this.teachersRepository.create({
            id,
            name,
            school_id,
        });

        return teacher;
    }
}

export { CreateTeachersUseCase };
