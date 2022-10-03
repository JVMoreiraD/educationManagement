import { Request, Response } from "express";

import { SchoolsRepository } from "@modules/schools/repositories/prisma/SchoolsRepository";

import { ChangeSchoolsNameUseCase } from "./ChangeSchoolsNameUseCase";

class ChangeSchoolsNameController {
    async handle(request: Request, response: Response) {
        const { id } = request.query;
        const { newName } = request.body;

        const schoolsRepository = new SchoolsRepository();
        const changeSchoolsNameUseCase = new ChangeSchoolsNameUseCase(
            schoolsRepository
        );

        const school = await changeSchoolsNameUseCase.execute(
            id as string,
            newName
        );

        return response.status(200).json(school);
    }
}
export { ChangeSchoolsNameController };
