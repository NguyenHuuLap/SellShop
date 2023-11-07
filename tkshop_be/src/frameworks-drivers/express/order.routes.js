import { Router } from "express";
import { create, getAll, getOne, update, getByUser } from "../../interface-adapters/controllers/order.controller.js";
import authMiddleware from "../../interface-adapters/middleware/auth.middleware.js";


const router = Router();

router.get("/", authMiddleware.isAdminOrStaff, getAll);
router.get("/:orderId", authMiddleware.isAuthorized, getOne);
router.post("/", authMiddleware.isAuthorized, create);
router.patch("/:orderId", authMiddleware.isAuthorized, update);
router.get("/owner", authMiddleware.isAuthorized, getByUser);

export default router;