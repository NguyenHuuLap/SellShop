import mongoose from "mongoose";
import productModel from "../entities/product.entity.js";


async function getAll(){
    return productModel.find()
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

// async function getByName(name){
//     return productModel.fin
// }
export default{ getAll, add};