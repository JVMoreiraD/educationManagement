import { Request, Response } from "express";

import { ClassesRepositories } from "@modules/classes/repositories/prisma/ClassesRepositories";

import { DeleteClassesUseCase } from "./DeleteClassesUseCase";

class DeleteClassesClassesController {
    async handle(request: Request, response: Response) {
        const { id } = request.query;

        const classesRepositories = new ClassesRepositories();
        const deleteClassesUseCase = new DeleteClassesUseCase(
            classesRepositories
        );

        await deleteClassesUseCase.execute(id as string);

        return response.status(200).json({ message: "Deletado com sucesso" });
    }
}
export { DeleteClassesClassesController };
