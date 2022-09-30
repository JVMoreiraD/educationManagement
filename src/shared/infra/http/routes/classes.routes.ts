import { Router } from "express";

import { CreateClassesController } from "@modules/classes/useCases/createClasses/CreateClassesController";

const classesRoutes = Router();

const createClassesController = new CreateClassesController();

classesRoutes.post("/", createClassesController.handle);

export { classesRoutes };
