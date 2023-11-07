import { Router } from "express";
import { getAll, getByProduct, getByUser, getOne, create, update, softDelete, remove } from "../../interface-adapters/controllers/comment.controller.js";
import authMiddleware from "../../interface-adapters/middleware/auth.middleware.js";

const router = Router();

router.get("/", getAll);
router.get("/:commentId", getOne);
router.get("/product/:productId", getByProduct);
router.get("/user/:userId", getByUser);
router.post("/", authMiddleware.isAuthorized, create);
router.patch("/:commentId", authMiddleware.isAuthorized, update);
router.patch("/soft-delete/:commentId", authMiddleware.isAuthorized, softDelete);
router.delete("/:commentId", authMiddleware.isAuthorized, remove);

export default router;