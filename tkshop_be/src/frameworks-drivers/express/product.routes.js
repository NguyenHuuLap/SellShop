import { Router } from "express";
import { add, getAll, remove, update } from "../../interface-adapters/controllers/product.controller.js";


const router = Router();

router.get("/", getAll);
router.post("/",add);
router.patch("/:productId", update);
router.delete("/:productId", remove);
export default router;