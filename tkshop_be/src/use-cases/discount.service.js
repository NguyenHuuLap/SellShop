import mongoose from "mongoose";
import discountModel from "../entities/discount.entity.js"


const getAllDiscount = async()=>{
    return discountModel.find().sort({createAt: -1}).lean().exec();
}

const addDiscount = async(data)=>{
    const code = await randomCode();
    if(code){
        const newDiscount = new discountModel({
            _id: new mongoose.Types.ObjectId(),
            code: code,
            ...data
        })
        return newDiscount.save();
    }else{
        return null;
    }
    
}

const update = async(id, data) => {
    return await discountModel.findByIdAndUpdate(id,data, {new: true});
}

const remove =  async(id) => {
    return !!(await discountModel.findByIdAndDelete(id));
}

const randomCode = async()=>{
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for(let i = 0; i<1000; i++){
        let result = '';
        for(let j = 0; j<10; j++){
            result+= characters.charAt(Math.floor(Math.random() * characters.length));
        }
        if(!(await isCheckCodeExits(result))){
            return result;
        }
    }
    return null
}
const isCheckCodeExits = async(code)=>{
    const result = await discountModel.findOne({code: code}).exec();
    return !!result;
}

export default {getAllDiscount, addDiscount, update, remove};