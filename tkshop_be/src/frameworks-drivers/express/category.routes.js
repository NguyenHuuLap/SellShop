import { Router } from "express";
import { add, getAll, remove, update } from "../../interface-adapters/controllers/category.controller.js";
import { isAdminOrStaff } from "../../interface-adapters/middleware/auth.middleware.js";


const router = Router();

router.get("/", getAll);
router.post("/", isAdminOrStaff, add);
router.patch("/:categoryId", isAdminOrStaff,update);
router.delete("/:categoryId", isAdminOrStaff, remove);


export default router;