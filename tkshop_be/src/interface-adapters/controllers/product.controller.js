import productService from "../../use-cases/product.service.js"


export const getAll =async(req, res, next)=>{
    try{
        let products = await productService.getAll();
        res.json(products);
    }
    catch(err){
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
}