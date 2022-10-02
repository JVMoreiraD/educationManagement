import { IClassesRepositories } from "@modules/classes/repositories/IClassesRepositories";

class AddNewStudentsUseCase {
    constructor(private classesRepository: IClassesRepositories) {}
    async execute(classes_id: string, students_id: string[]) {
        const classes = await this.classesRepository.addStudentsToClass(
            classes_id,
            students_id
        );
        return classes;
    }
}

export { AddNewStudentsUseCase };
