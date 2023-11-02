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