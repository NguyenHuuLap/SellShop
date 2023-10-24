import { Router } from "express";
import { getAll, add, getByRole } from "../../interface-adapters/controllers/user.controller.js";

const router = Router();

router.get("/", getAll);
router.post("/add", add);
router.get("/getByRole", getByRole);

export default router;