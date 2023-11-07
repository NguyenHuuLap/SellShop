import mongoose from "mongoose";
import brandModel from "../entities/brand.entity.js";

<<<<<<< HEAD

async function getAll(){
=======
const getAll = async() =>{
>>>>>>> 276fedb36618be75a78887ddfeb7c28f6edaa805
    return brandModel.find()
        .sort({createdAt:-1})
        .lean({})
        .exec();
}

<<<<<<< HEAD
async function add(data){
=======
const getId = async(id)=>{
    const result = brandModel.findById(id).lean().exec();
    return result ? result._id : null;
}

const add = async(data)=>{
>>>>>>> 276fedb36618be75a78887ddfeb7c28f6edaa805
    const brand = new brandModel({
        _id: new mongoose.Types.ObjectId(),
        ...data
    });
    return brand.save();
}

<<<<<<< HEAD
async function update(id, data){
    return brandModel.findByIdAndUpdate(id, data,{new: true});
}

async function remove(id){
    return !!(await brandModel.findOneAndDelete({_id: id}));
}

export default {getAll, add, update, remove};
=======
const update = async(id,data) => {
    return brandModel.findByIdAndUpdate(id, data,{new: true});
}

const remove = async(id) => {
    return !!(await brandModel.findOneAndDelete({_id: id}));
}

export default {getAll, add, update, remove, getId};
>>>>>>> 276fedb36618be75a78887ddfeb7c28f6edaa805
