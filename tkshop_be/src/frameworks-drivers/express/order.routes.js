import { Router } from "express";
import { add, getAll } from "../../interface-adapters/controllers/order.controller.js";

const router = Router();

router.get("/", getAll);
router.post("/", add);


export default router;