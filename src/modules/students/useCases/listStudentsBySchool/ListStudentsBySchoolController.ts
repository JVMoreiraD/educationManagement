import { Request, Response } from "express";

import { StudentsRepository } from "@modules/students/repositories/prisma/StudentsRepository";

import { ListStudentsBySchoolUseCase } from "./ListStudentsBySchoolUseCase";

class ListStudentsBySchoolController {
    async handle(request: Request, response: Response) {
        const { schools_id } = request.query;

        const studentsRepository = new StudentsRepository();
        const listStudentsBySchoolUseCase = new ListStudentsBySchoolUseCase(
            studentsRepository
        );

        const school = await listStudentsBySchoolUseCase.execute(
            schools_id as string
        );

        return response.json(school).status(200);
    }
}
export { ListStudentsBySchoolController };
