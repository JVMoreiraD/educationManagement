import { Request, Response } from "express";

import { TeachersRepository } from "@modules/teachers/repositories/prisma/TeachersRepository";

import { DeleteTeacherUseCase } from "./DeleteTeacherUseCase";

class DeleteTeacherController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const teachersRepository = new TeachersRepository();
        const deleteTeacherUseCase = new DeleteTeacherUseCase(
            teachersRepository
        );

        await deleteTeacherUseCase.execute(id);

        return response.json({ message: "Deletado com sucesso" }).status(200);
    }
}
export { DeleteTeacherController };
