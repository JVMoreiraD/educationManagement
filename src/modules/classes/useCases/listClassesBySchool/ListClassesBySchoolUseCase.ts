import { IClassesRepositories } from "@modules/classes/repositories/IClassesRepositories";

class ListClassesBySchoolUseCase {
    constructor(private classesRepository: IClassesRepositories) {}

    async execute(school_id: string) {
        const classes = await this.classesRepository.findClassesBySchool(
            school_id
        );
        return classes;
    }
}

export { ListClassesBySchoolUseCase };
