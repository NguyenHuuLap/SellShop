import mongoose from "mongoose";
import discountModel from "../entities/discount.entity.js"


const getAllDiscount = async()=>{
    return discountModel.find().sort({createAt: -1}).lean().exec();
}

const addDiscount = async(data)=>{
    const code = await randomCode();

    const newDiscount = new discountModel({
        _id: new mongoose.Types.ObjectId(),
        code: code,
        ...data
    })
    return await newDiscount.save();
    
}

const update = async(id, data) => {
    return await discountModel.findByIdAndUpdate(id,data, {new: true});
}

const remove =  async(id) => {
    return !!(await discountModel.findByIdAndDelete(id));
}

const randomCode = async()=>{
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code;
    do {
        let result = '';
        for(let j = 0; j<10; j++){
            result+= characters.charAt(Math.floor(Math.random() * characters.length));
        }
        code = result;
    } while (!(await isCheckCodeExits(result)))
    return code;
}
const isCheckCodeExits = async(code)=>{
    const result = await discountModel.findOne({code: code}).exec();
    return !!result;
}

export default {getAllDiscount, addDiscount, update, remove};