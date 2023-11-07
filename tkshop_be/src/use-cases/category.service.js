import mongoose from "mongoose";
import categoryModel from "../entities/category.entity.js"

const getAll = async () =>{
    return categoryModel.find()
    .sort({createAt: -1})
    .lean({})
    .exec();
}

const getId = async(id) =>{
    const result = await categoryModel.findById(id).lean().exec();
    return result ? result._id : null;
}

const add = async (data) => {
    const category = new categoryModel({
        _id: new mongoose.Types.ObjectId(),
        ...data
    });
    return category.save();
}

const update = async (id, data) => {
    return categoryModel.findByIdAndUpdate(id, data,{new: true});
}   

const remove = async (id) => {
    return !!(await categoryModel.findOneAndDelete({_id: id}));
}


export default {getAll, getId, add, update, remove};