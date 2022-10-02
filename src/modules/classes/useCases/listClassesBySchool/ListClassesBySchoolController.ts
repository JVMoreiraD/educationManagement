import { Request, Response } from "express";

import { ClassesRepositories } from "@modules/classes/repositories/prisma/ClassesRepositories";

import { ListClassesBySchoolUseCase } from "./ListClassesBySchoolUseCase";

class ListClassesClassesController {
    async handle(request: Request, response: Response) {
        const { school_id } = request.query;

        const classesRepositories = new ClassesRepositories();
        const listClassesBySchoolUseCase = new ListClassesBySchoolUseCase(
            classesRepositories
        );

        const schools = await listClassesBySchoolUseCase.execute(
            school_id as string
        );

        return response.status(200).json(schools);
    }
}
export { ListClassesClassesController };
