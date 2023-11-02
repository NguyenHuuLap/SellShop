import mongoose from "mongoose";
import brandModel from "../entities/brand.entity.js";


async function getAll(){
    return brandModel.find()
        .sort({createdAt:-1})
        .lean({})
        .exec();
}

async function add(data){
    const brand = new brandModel({
        _id: new mongoose.Types.ObjectId(),
        ...data
    });
    return brand.save();
}

async function update(id, userId,data){
    return brandModel.findByIdUpdate(id, userId, data);
}

export default {getAll, add, update};