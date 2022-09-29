import { Router } from "express";

import { CreateSchoolController } from "@modules/schools/useCases/createSchool/CreateSchoolController";
import { ListSchoolsController } from "@modules/schools/useCases/listSchools/ListShoolsController";

const schoolRoutes = Router();

const createSchoolController = new CreateSchoolController();
const listSchoolsController = new ListSchoolsController();

schoolRoutes.post("/", createSchoolController.handle);
schoolRoutes.get("/", listSchoolsController.handle);

export { schoolRoutes };
