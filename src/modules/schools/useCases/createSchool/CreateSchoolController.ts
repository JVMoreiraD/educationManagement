import { Request, Response } from "express";

import { SchoolsRepository } from "@modules/schools/repositories/SchoolsRepository";

import { CreateSchoolUseCase } from "./CreateSchoolUseCase";

class CreateSchoolController {
    async handle(request: Request, response: Response) {
        const { name, address } = request.body;

        const schoolsRepository = new SchoolsRepository();
        const createSchoolUseCase = new CreateSchoolUseCase(schoolsRepository);

        const school = await createSchoolUseCase.execute({ name, address });

        return response.status(201).json(school);
    }
}
export { CreateSchoolController };
