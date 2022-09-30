import { Router } from "express";

import { CreateClassesController } from "@modules/classes/useCases/createClasses/CreateClassesController";
import { DeleteClassesClassesController } from "@modules/classes/useCases/deleteClasses/DeleteClassesController";
import { ListClassesClassesController } from "@modules/classes/useCases/listClassesBySchool/ListClassesBySchoolController";

const classesRoutes = Router();

const createClassesController = new CreateClassesController();
const listClassesBySchoolController = new ListClassesClassesController();
const deleteClassesController = new DeleteClassesClassesController();

classesRoutes.post("/", createClassesController.handle);
classesRoutes.get("/", listClassesBySchoolController.handle);
classesRoutes.delete("/", deleteClassesController.handle);

export { classesRoutes };
