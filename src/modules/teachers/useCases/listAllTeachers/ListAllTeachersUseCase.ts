import { ITeachersRepository } from "@modules/teachers/repositories/ITeachersRepository";

class ListAllTeachersUseCase {
    constructor(private teachersRepository: ITeachersRepository) {}
    async execute() {
        const teachers = await this.teachersRepository.listAllTeaches();
        return teachers;
    }
}
export { ListAllTeachersUseCase };
