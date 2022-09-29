import { Request, Response } from "express";

import { TeachersRepository } from "@modules/teachers/repositories/prisma/TeachersRepository";

import { ListAllTeachersUseCase } from "./ListAllTeachersUseCase";

class ListAllTeachersController {
    async handle(request: Request, response: Response) {
        const teachersRepository = new TeachersRepository();
        const litAllTeachersUseCase = new ListAllTeachersUseCase(
            teachersRepository
        );

        const teachers = await litAllTeachersUseCase.execute();

        return response.json(teachers).status(200);
    }
}
export { ListAllTeachersController };
