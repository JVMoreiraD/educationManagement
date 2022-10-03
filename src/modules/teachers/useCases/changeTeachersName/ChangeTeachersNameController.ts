import { Request, Response } from "express";

import { TeachersRepository } from "@modules/teachers/repositories/prisma/TeachersRepository";

import { ChangeTeachersNameUseCase } from "./ChangeSchoolsNameUseCase";

class ChangeTeachersNameController {
    async handle(request: Request, response: Response) {
        const { id } = request.query;
        const { newName } = request.body;

        const teachersRepository = new TeachersRepository();
        const changeTeachersNameUseCase = new ChangeTeachersNameUseCase(
            teachersRepository
        );

        const teacher = await changeTeachersNameUseCase.execute(
            id as string,
            newName
        );

        return response.status(200).json(teacher);
    }
}
export { ChangeTeachersNameController };
