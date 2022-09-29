import { Request, Response } from "express";

import { SchoolsRepository } from "@modules/schools/repositories/SchoolsRepository";

import { DeleteSchoolUseCase } from "./DeleteSchoolUseCase";

class DeleteSchoolController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const schoolsRepository = new SchoolsRepository();
        const deleteSchoolUseCase = new DeleteSchoolUseCase(schoolsRepository);

        await deleteSchoolUseCase.execute(id);

        return response.json({ message: "deleted with success" }).status(200);
    }
}
export { DeleteSchoolController };
