import mongoose from "mongoose";
import productModel from "../entities/product.entity.js";
import stringformatUtils from "../utils/stringformat.utils.js";

const getIdentity = async (identity) => {
    if (stringformatUtils.isUUID(identity))
        return {_id: identity}
    else
        return {slug: identity}
}

const getOneByIdentity = async (identity, variant) => {
    return productModel.findOne(await getIdentity(identity)).populate('brandId categoryId').lean().exec();

}

async function getAll(){
    return productModel.find()
    .populate('brandId categoryId')
    .sort({createdAt: -1})
    .lean()
    .exec();
}

async function add(data){
    const product = new productModel({
        _id: new mongoose.Types.ObjectId(),
        ...data
    });
    return product.save();
}



async function update(id,data){
    return productModel.findByIdAndUpdate(id, data, {new:true});
}
// async function getByName(name){
//     return productModel.fin
// }
export default{ getAll, add, getOneByIdentity};