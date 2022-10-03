import { Request, Response } from "express";

import { StudentsRepository } from "@modules/students/repositories/prisma/StudentsRepository";

import { ChangeStudentsNameUseCase } from "./ChangeStudentsNameUseCase";

class ChangeStudentsNameController {
    async handle(request: Request, response: Response) {
        const { id } = request.query;
        const { newName } = request.body;

        const studentsRepository = new StudentsRepository();
        const changeStudentsNameUseCase = new ChangeStudentsNameUseCase(
            studentsRepository
        );

        const school = await changeStudentsNameUseCase.execute(
            id as string,
            newName
        );

        return response.status(200).json(school);
    }
}
export { ChangeStudentsNameController };
