import { Router } from "express";

import { classesRoutes } from "./classes.routes";
import { schoolRoutes } from "./school.routes";
import { studentsRoutes } from "./students.routes";
import { teacherRoutes } from "./teachers.routes";

const router = Router();

router.use("/school", schoolRoutes);
router.use("/teacher", teacherRoutes);
router.use("/student", studentsRoutes);
router.use("/classes", classesRoutes);

export { router };
