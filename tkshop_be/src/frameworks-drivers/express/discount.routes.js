import { Router } from "express";
import { addDiscount, getAllDiscount, remove, update } from "../../interface-adapters/controllers/discount.controller.js";

const router = Router();

router.get("/", getAllDiscount);
router.post("/", addDiscount);
router.patch("/:discountId", update)
router.delete("/:discountId", remove)

export default router;