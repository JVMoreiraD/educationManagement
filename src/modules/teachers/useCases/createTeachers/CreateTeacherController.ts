import { Request, Response } from "express";

import { TeachersRepository } from "@modules/teachers/repositories/prisma/TeachersRepository";

import { CreateTeachersUseCase } from "./CreateTeachersUseCase";

class CreateTeachersController {
    async handle(request: Request, response: Response) {
        const { name, school_id } = request.body;

        const teachersRepository = new TeachersRepository();
        const createTeachersUseCase = new CreateTeachersUseCase(
            teachersRepository
        );

        const teacher = await createTeachersUseCase.execute({
            name,
            school_id,
        });

        return response.status(201).json(teacher);
    }
}

export { CreateTeachersController };
