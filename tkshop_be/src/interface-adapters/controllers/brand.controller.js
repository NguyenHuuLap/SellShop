import brandService from "../../use-cases/brand.service.js"


export const getAll = async (req, res, next) =>{
    try{
        let brands = await brandService.getAll();
        res.json(brands);
    }
    catch(err){
        res.json({
            message: err.message,
            error: err
        });
        next(err);
    }
}
export const add = async(req, res, next) => {
    try{
        const newBrand = await brandService.add(req.body);
        res.json(newBrand);
    } catch(err){
        res.json({
            message: err.message,
            error: err
        });
        next(err);
    }
}
export const update = async(req, res, next) =>{
    try{
    }
    catch(err){
        res.json({
            message: err.message,
            error: err
        });
        next(err);
    }
}