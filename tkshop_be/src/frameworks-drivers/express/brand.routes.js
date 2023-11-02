import { Router } from "express";
import { add, getAll } from "../../interface-adapters/controllers/brand.controller.js";



const router = Router();

router.get("/", getAll);
router.post("/add", add);

export default router;