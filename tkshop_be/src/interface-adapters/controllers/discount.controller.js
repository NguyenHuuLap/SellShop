import discountService from "../../use-cases/discount.service.js"


export const getAllDiscount = async (req,res,next)=>{
    try{
        const discountAll = await discountService.getAllDiscount();
        if(discountAll){
            res.status(200).json({message: 'get all discount successful', data: discountAll})
        }
        else{
            res.status(500).json({message: 'has error when got all discount'})
        }
    }catch(err){
        next(err)
    }
}

export const addDiscount = async(req, res, next) => {
    try{
        const newDiscount = await discountService.addDiscount(req.body);
        if(newDiscount){
            res.status(200).json({message: 'add discount successful', data: newDiscount})
        }
        else{
            res.status(500).json({message: 'has error when add discount'})
        }

    }catch(err){
        next(err);
    }
}
export const update = async(req, res, next) => {
    try{
        const discountId = req.params.discountId;
        const updateDiscount = await discountService.update(discountId, req.body);
        if(updateDiscount){
            res.status(200).json({message: 'update discount successful', data: updateDiscount})
        }
        else{
            res.status(500).json({message: 'has error when update discount'})
        }
    }catch(err){
        next(err);
    }
}

export const remove = async(req, res, next) => {
    try{
        const discountId = req.params.discountId;
        const removeDiscount = await discountService.remove(discountId);
        if(removeDiscount){
            res.status(200).json({message: 'delete discount successful', data: removeDiscount})
        }
        else{
            res.status(500).json({message: 'has error when delete discount'})
        }
    }catch(err){
        next(err);
    }
}