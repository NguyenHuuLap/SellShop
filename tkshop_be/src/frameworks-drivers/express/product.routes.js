import { Router } from "express";
import { add, getFullAll, getOneProduct, remove, update, updateProductVariant } from "../../interface-adapters/controllers/product.controller.js";


const router = Router();

router.get("/", getFullAll);
router.get("/:productId", getOneProduct);
router.post("/",add);
router.patch("/:productId", update);
router.delete("/:productId", remove);
router.patch("/:productId/variants/:sku", updateProductVariant);
export default router;