import { Router } from "express";

import { CreateTeachersController } from "@modules/teachers/useCases/createTeachers/CreateTeacherController";
import { DeleteTeacherController } from "@modules/teachers/useCases/deleteTeacher/DeleteTeacherController";
import { ListAllTeachersController } from "@modules/teachers/useCases/listAllTeachers/ListAllTeachersController";
import { ListTeachersBySchoolController } from "@modules/teachers/useCases/listTeachersBySchool/ListTeachersBySchoolController";

const teacherRoutes = Router();

const createTeachersController = new CreateTeachersController();
const deleteTeacherController = new DeleteTeacherController();
const listAllTeachersController = new ListAllTeachersController();
const listTeachersBySchoolController = new ListTeachersBySchoolController();

teacherRoutes.post("/", createTeachersController.handle);
teacherRoutes.delete("/:id", deleteTeacherController.handle);
teacherRoutes.get("/all", listAllTeachersController.handle);
teacherRoutes.get("/", listTeachersBySchoolController.handle);

export { teacherRoutes };
