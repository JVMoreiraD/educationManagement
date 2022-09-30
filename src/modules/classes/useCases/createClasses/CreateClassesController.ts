import { Request, Response } from "express";

import { ClassesRepositories } from "@modules/classes/repositories/prisma/ClassesRepositories";

import { CreateClassesUseCase } from "./CreateClassesUseCase";

class CreateClassesController {
    async handle(request: Request, response: Response) {
        const {
            grade,
            description,
            school_id,
            shift,
            students_id,
            teacher_id,
        } = request.body;

        const classesRepositories = new ClassesRepositories();
        const createClassesUseCase = new CreateClassesUseCase(
            classesRepositories
        );

        const school = await createClassesUseCase.execute({
            grade,
            description,
            school_id,
            shift,
            students_id,
            teacher_id,
        });

        return response.status(201).json(school);
    }
}
export { CreateClassesController };
