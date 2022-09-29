import { Request, Response } from "express";

import { SchoolsRepository } from "@modules/schools/repositories/SchoolsRepository";

import { ListSchoolsUseCase } from "./ListSchoolsUseCase";

class ListSchoolsController {
    async handle(request: Request, response: Response) {
        const schoolsRepository = new SchoolsRepository();
        const listSchoolsUseCase = new ListSchoolsUseCase(schoolsRepository);

        const school = await listSchoolsUseCase.execute();

        return response.status(201).json(school);
    }
}

export { ListSchoolsController };
