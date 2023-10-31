import User from "../entities/user.entity.js";
import mongoose from "mongoose";
import constants from "../constants.js";
import stringformatUtils from "../utils/stringformat.utils.js";

const getIdentity = async (identity) => {
    if(stringformatUtils.isUUID(identity))
        return {_id: identity};
    else if(stringformatUtils.isEmail(identity))
        return {email: identity}
    else if(stringformatUtils.isPhone(identity))
        return {phone: identity}
}

const getAll = async () => {
    return User.find().sort({ createdAt: -1 }).lean().exec();
}

async function add(data) {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        ...data
    });
    return user.save();
}

const getByRole = async (role) => {
    return User.find({ role }).sort({ createdAt: -1 }).lean().exec();
  }

const getOneByIdentity = async (identity) => {
    return User.findById(await this.getIdentity(identity)).lean().exec();
}

const isExistEmail = async (email) => {
    return !!(await User.findOne({ email }).select('_id'));
}


const isExistPhone = async (phone) => {
    return !!(await User.findOne({ phone }).select('_id'));
}

const update = async (id, data) => {
    return User.findByIdAndUpdate(id, data, {new: true});
}


const remove = async (identity) => {
    return !!(await User.findOneAndDelete(await getIdentity(identity)));
  }

export default { getIdentity, getAll, add, getByRole, getOneByIdentity, isExistEmail, isExistPhone, update, remove};

