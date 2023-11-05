import categoryService from "../../use-cases/category.service.js"


export const getAll = async(req, res, next) => {
    try{
        let categories = await categoryService.getAll();
        res.json(categories);
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
        const newCategory = await categoryService.add(req.body);
        res.json(newCategory);
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
        const updateCategory = await categoryService.update(req.params.categoryId, req.body);
        res.json(updateCategory);
    }
    catch(err){
        res.json({
            message: err.message,
            error: err
        });
        next(err);
    }
}
export const remove = async(req, res, next) => {
    try{
        const removeCategory = await categoryService.remove(req.params.categoryId);
        res.json(removeCategory);
    }catch(err){
        res.json({
            message: err.message,
            error: err
        });
        next(err);
    }
}