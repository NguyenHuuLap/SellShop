import { Router } from "express";
import { add, getFullAll, getOneProduct, remove, update, updateProductVariant } from "../../interface-adapters/controllers/product.controller.js";
import { add, getFullAll, getOneProduct, remove, searchProduct, update, updateProductVariant } from "../../interface-adapters/controllers/product.controller.js";
import { ConstructionOutlined } from "@mui/icons-material";


const router = Router();

router.get("/search", searchProduct);
router.get("/", getFullAll);
router.get("/:productId", getOneProduct);
router.post("/",add);
router.patch("/:productId", update);
router.delete("/:productId", remove);
router.patch("/:productId/variants/:sku", updateProductVariant);


export default router;