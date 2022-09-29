import { Request, Response } from "express";

import { StudentsRepository } from "@modules/students/repositories/prisma/StudentsRepository";

import { CreateStudentUseCase } from "./CreateStudentUseCase";

class CreateStudentController {
    async handle(request: Request, response: Response) {
        const { name, schools_id, registration } = request.body;

        const studentsRepository = new StudentsRepository();
        const createStudentUseCase = new CreateStudentUseCase(
            studentsRepository
        );

        const student = await createStudentUseCase.execute({
            name,
            schools_id,
            registration,
        });

        return response.status(201).json(student);
    }
}

export { CreateStudentController };
