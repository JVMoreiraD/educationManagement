import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSchoolsUseCase } from "./ListSchoolsUseCase";

class ListSchoolsController {
    async handle(request: Request, response: Response) {
        const listSchoolsUseCase = container.resolve(ListSchoolsUseCase);

        const school = await listSchoolsUseCase.execute();

        return response.status(201).json(school);
    }
}

export { ListSchoolsController };
