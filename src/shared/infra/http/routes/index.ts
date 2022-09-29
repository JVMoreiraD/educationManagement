import { Router } from "express";

import { schoolRoutes } from "./school.routes";

const router = Router();

router.use("/school", schoolRoutes);

export { router };
