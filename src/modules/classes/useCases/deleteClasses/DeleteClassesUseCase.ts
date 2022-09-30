import { IClassesRepositories } from "@modules/classes/repositories/IClassesRepositories";
import { AppError } from "@shared/errors/AppError";

class DeleteClassesUseCase {
    constructor(private classesRepository: IClassesRepositories) {}
    async execute(id: string) {
        const classesExists = await this.classesRepository.findClassesById(id);
        if (!classesExists) {
            throw new AppError("Turma não existe");
        }

        await this.classesRepository.deleteClasse(id);
    }
}
export { DeleteClassesUseCase };
