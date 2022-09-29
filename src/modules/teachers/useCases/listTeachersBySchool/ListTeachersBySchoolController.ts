import { Request, Response } from "express";

import { TeachersRepository } from "@modules/teachers/repositories/prisma/TeachersRepository";

import { ListTeachersBySchoolUseCase } from "./ListTeachersBySchoolUseCase";

class ListTeachersBySchoolController {
    async handle(request: Request, response: Response) {
        const { school_id } = request.query;
        const teachersRepository = new TeachersRepository();
        const listTeachersBySchoolUseCase = new ListTeachersBySchoolUseCase(
            teachersRepository
        );

        const teachers = await listTeachersBySchoolUseCase.execute(
            school_id as string
        );

        return response.json(teachers).status(200);
    }
}
export { ListTeachersBySchoolController };
