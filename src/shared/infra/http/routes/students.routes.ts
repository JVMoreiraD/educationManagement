import { Router } from "express";

import { ChangeStudentsNameController } from "@modules/students/useCases/changeStudentsName/ChangeStudentsNameController";
import { CreateStudentController } from "@modules/students/useCases/createStudent/CreateStudentController";
import { DeleteStudentController } from "@modules/students/useCases/deleteStudent/DeleteStudentController";
import { ListStudentsBySchoolController } from "@modules/students/useCases/listStudentsBySchool/ListStudentsBySchoolController";

const studentsRoutes = Router();

const createStudentController = new CreateStudentController();
const listStudentsBySchoolController = new ListStudentsBySchoolController();
const deleteStudentController = new DeleteStudentController();
const changeStudentsNameController = new ChangeStudentsNameController();

studentsRoutes.post("/", createStudentController.handle);
studentsRoutes.get("/", listStudentsBySchoolController.handle);
studentsRoutes.delete("/:id", deleteStudentController.handle);
studentsRoutes.put("/", changeStudentsNameController.handle);

export { studentsRoutes };
