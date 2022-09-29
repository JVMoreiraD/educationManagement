import { Request, Response } from "express";

import { StudentsRepository } from "@modules/students/repositories/prisma/StudentsRepository";

import { DeleteStudentUseCase } from "./DeleteStudentUseCase";

class DeleteStudentController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const studentsRepository = new StudentsRepository();
        const deleteStudentUseCase = new DeleteStudentUseCase(
            studentsRepository
        );

        await deleteStudentUseCase.execute(id);

        return response.json({ message: "Deletado com sucesso" }).status(200);
    }
}
export { DeleteStudentController };
