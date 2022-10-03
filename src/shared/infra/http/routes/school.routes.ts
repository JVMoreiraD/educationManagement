import { Router } from "express";

import { ChangeSchoolsNameController } from "@modules/schools/useCases/changeSchoolName/ChangeSchoolsNameController";
import { CreateSchoolController } from "@modules/schools/useCases/createSchool/CreateSchoolController";
import { DeleteSchoolController } from "@modules/schools/useCases/deleteSchool/DeleteSchoolController";
import { ListSchoolsController } from "@modules/schools/useCases/listSchools/ListShoolsController";

const schoolRoutes = Router();

const createSchoolController = new CreateSchoolController();
const listSchoolsController = new ListSchoolsController();
const deleteSchoolController = new DeleteSchoolController();
const changeSchoolsNameController = new ChangeSchoolsNameController();

schoolRoutes.post("/", createSchoolController.handle);
schoolRoutes.get("/", listSchoolsController.handle);
schoolRoutes.put("/", changeSchoolsNameController.handle);
schoolRoutes.delete("/:id", deleteSchoolController.handle);

export { schoolRoutes };
