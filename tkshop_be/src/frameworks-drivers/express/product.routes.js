import { Router } from "express";
<<<<<<< HEAD
import { getAll } from "../../interface-adapters/controllers/product.controller.js";
=======
import { add, getFullAll, getOneProduct, remove, update, updateProductVariant } from "../../interface-adapters/controllers/product.controller.js";
>>>>>>> 276fedb36618be75a78887ddfeb7c28f6edaa805


const router = Router();

<<<<<<< HEAD
router.get("/", getAll);
=======
router.get("/", getFullAll);
router.get("/:productId", getOneProduct);
router.post("/",add);
router.patch("/:productId", update);
router.delete("/:productId", remove);
router.patch("/:productId/variants/:sku", updateProductVariant);
>>>>>>> 276fedb36618be75a78887ddfeb7c28f6edaa805
export default router;