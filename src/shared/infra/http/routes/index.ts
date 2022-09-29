import { Router } from "express";

import { schoolRoutes } from "./school.routes";
import { studentsRoutes } from "./students.routes";
import { teacherRoutes } from "./teachers.routes";

const router = Router();

router.use("/school", schoolRoutes);
router.use("/teacher", teacherRoutes);
router.use("/student", studentsRoutes);

export { router };
