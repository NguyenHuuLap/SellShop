import { Router } from "express";
import { getAll } from "../../interface-adapters/controllers/product.controller.js";


const router = Router();

router.get("/", getAll);
export default router;