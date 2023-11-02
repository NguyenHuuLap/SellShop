import mongoose from "mongoose";
import categoryModel from "../entities/category.entity.js"

async function getAll(){
    return categoryModel.find()
    .sort({createAt: -1})
    .lean({})
    .exec();
}
async function add(){
    const category = new categoryModel({
        _id: new mongoose.Types.ObjectId(),
        ...data
    });
    return category.save();
}
async function update(id, data){
    return categoryModel.findByIdAndUpdate(id, data);
}

async function remove(id){
    const category = await categoryModel.findOneAndDelete({_id: id});
    return !!category;
}

export default {getAll, add, update, remove};