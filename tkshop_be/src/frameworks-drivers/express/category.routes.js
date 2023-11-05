import { Router } from "express";
import { add, getAll, remove, update } from "../../interface-adapters/controllers/category.controller.js";


const router = Router();

router.get("/", getAll);
router.post("/", add);
router.patch("/:categoryId", update);
router.delete("/:categoryId", remove);


export default router;