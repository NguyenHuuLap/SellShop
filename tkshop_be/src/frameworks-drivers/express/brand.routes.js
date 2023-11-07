import { Router } from "express";
import { add, getAll, remove, update } from "../../interface-adapters/controllers/brand.controller.js";



const router = Router();

router.get("/", getAll);
router.post("/add", add);
router.patch("/:brandId", update);
router.delete("/:brandId", remove);

export default router;