import productService from "../../use-cases/product.service.js"
<<<<<<< HEAD


export const getAll =async(req, res, next)=>{
    try{
        let products = await productService.getAll();
=======
import FormatUtils from "../../utils/FormatUtils.js";


export const formatProduct = (product, req) =>{
    product.category = FormatUtils.imageUrl(product.category, 'image', req);
    product.brand = FormatUtils.imageUrl(product.brand, 'image', req);

    if(product.variants && product.variants.length >0){
        product.variants = product.variants.map(x=> {
            x= FormatUtils.imageUrl(x, 'thumbnail', req);
            x=FormatUtils.imageUrl(x, 'pictures', req);
            return x;
        });
    }
    return product
}

export const getFullAll =async(req, res, next)=>{
    try{
        let products = await productService.getFullAll();
>>>>>>> 276fedb36618be75a78887ddfeb7c28f6edaa805
        res.json(products);
    }
    catch(err){
        res.json({
            message: err.message,
            error:err
        });
        next(err);
    }
<<<<<<< HEAD
=======
}

export const getOneProduct = async(req,res, next) =>{
    try{
        const product = await productService.getOneProduct(req.params.productId);
        res.json(product);
    }catch(err){
        res.json({
            message: err.message,
            error:err
        });
        next(err);
    }
}

export const add = async(req,res, next) => {
    try{
        const newProduct = await productService.add(req.body);
        res.json(newProduct);  
    }catch(err){
        res.json({
            message: err.message,
            error:err
        });
        next(err);
    }
}

export const updateProductVariant = async(req,res, next) => {
    try{
        const {productId, sku} = req.params;
        const updateProduct = await productService.updateProductVariant(productId, sku, req.body);
        if(updateProduct){
            res.status(200).json({message: `Update product variant of '${updateProduct.name}' successfully!`,
        data: formatProduct(updateProduct, req)});
        }
        else{
            res.status(500).json({ message: `Update product variant of '${updateProduct.name}' failed!`});
        }
    }
    catch(err){
        next(err);
    }
}

export const update = async(req,res, next) => {
    try{
        const updateProduct = await productService.update(req.params.productId, req.body);
        res.json(updateProduct);
    }catch(err){
        res.json({
            message: err.message,
            error: err
        });
        next(err);
    }
}
export const remove = async(req, res, next) => {
    try{
        const removeProduct = await productService.remove(req.params.productId);
        res.json(removeProduct);
    }catch(err){
        res.json({
            message: err.message,
            error: err
        });
        next(err);
    }
>>>>>>> 276fedb36618be75a78887ddfeb7c28f6edaa805
}