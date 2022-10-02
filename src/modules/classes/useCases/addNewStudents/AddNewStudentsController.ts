import { Request, Response } from "express";

import { ClassesRepositories } from "@modules/classes/repositories/prisma/ClassesRepositories";

import { AddNewStudentsUseCase } from "./AddNewStudentsUseCase";

class AddNewStudentsController {
    async handle(request: Request, response: Response) {
        const { students_id } = request.body;
        const { classes_id } = request.params;

        const classesRepositories = new ClassesRepositories();
        const addNewStudentsUseCase = new AddNewStudentsUseCase(
            classesRepositories
        );

        const school = await addNewStudentsUseCase.execute(
            classes_id,
            students_id
        );

        return response.status(201).json(school);
    }
}
export { AddNewStudentsController };
