import { Router } from "express";
import { add, getAll, remove, update } from "../../interface-adapters/controllers/brand.controller.js";



const router = Router();

router.get("/", getAll);
<<<<<<< HEAD
router.post("/add", add);
=======
router.post("/", add);
>>>>>>> 276fedb36618be75a78887ddfeb7c28f6edaa805
router.patch("/:brandId", update);
router.delete("/:brandId", remove);

export default router;