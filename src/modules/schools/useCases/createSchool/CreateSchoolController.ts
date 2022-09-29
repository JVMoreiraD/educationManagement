import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSchoolUseCase } from "./CreateSchoolUseCase";

class CreateSchoolController {
    async handle(request: Request, response: Response) {
        const { name, address } = request.body;

        const createSchoolUseCase = container.resolve(CreateSchoolUseCase);

        const school = await createSchoolUseCase.execute({ name, address });

        return response.status(201).json(school);
    }
}
export { CreateSchoolController };
