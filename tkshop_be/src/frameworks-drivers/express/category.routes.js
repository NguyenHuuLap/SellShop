import { Router } from "express";
import { add, getAll } from "../../interface-adapters/controllers/category.controller.js";


const router = Router();

router.get("/", getAll);
router.post("/add", add);


export default router;