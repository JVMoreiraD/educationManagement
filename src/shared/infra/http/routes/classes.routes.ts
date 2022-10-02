import { Router } from "express";

import { AddNewStudentsController } from "@modules/classes/useCases/addNewStudents/AddNewStudentsController";
import { CreateClassesController } from "@modules/classes/useCases/createClasses/CreateClassesController";
import { DeleteClassesClassesController } from "@modules/classes/useCases/deleteClasses/DeleteClassesController";
import { ListClassesClassesController } from "@modules/classes/useCases/listClassesBySchool/ListClassesBySchoolController";

const classesRoutes = Router();

const createClassesController = new CreateClassesController();
const listClassesBySchoolController = new ListClassesClassesController();
const deleteClassesController = new DeleteClassesClassesController();
const addNewStudentsController = new AddNewStudentsController();

classesRoutes.post("/", createClassesController.handle);
classesRoutes.get("/", listClassesBySchoolController.handle);
classesRoutes.delete("/", deleteClassesController.handle);
classesRoutes.put("/:classes_id", addNewStudentsController.handle);

export { classesRoutes };
