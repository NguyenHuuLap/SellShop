import mongoose from "mongoose";
import categoryModel from "../entities/category.entity.js"

async function getAll(){
    return categoryModel.find()
    .sort({createAt: -1})
    .lean({})
    .exec();
}
async function add(data){
    const category = new categoryModel({
        _id: new mongoose.Types.ObjectId(),
        ...data
    });
    return category.save();
}
async function update(id, data){
    return categoryModel.findByIdAndUpdate(id, data,{new: true});
}

async function remove(id){
    return !!(await categoryModel.findOneAndDelete({_id: id}));
    
}

export default {getAll, add, update, remove};