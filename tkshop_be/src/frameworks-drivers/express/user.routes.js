import { Router } from "express";
import { getAll, add, getByRole, update, getOneByIdentity, remove } from "../../interface-adapters/controllers/user.controller.js";

const router = Router();

router.get("/", getAll);
router.post("/", add);
router.get("/getByRole", getByRole);
router.patch("/:userId", update);
router.get("/:identity", getOneByIdentity);
router.delete("/:identity", remove);

export default router;