import User from "../entities/user.entity.js";
import mongoose from "mongoose";
import stringformatUtils from "../utils/stringformat.utils.js";
import { ApplicationError } from "../utils/error.util.js";
import { COMMON_ERROR } from "../constants.js";
import encodedUtil from "../utils/encoded.util.js";

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
    return User.findOne(await getIdentity(identity)).lean().exec();
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

const changePassword = async (userId, oldPassword, newPassword) => {
    const user = await userService.getOneByIdentity(await getIdentity(userId));

    if (!user) {
        throw new ApplicationError(COMMON_ERROR.RESOURCE_NOT_FOUND);
    }

    if(encodedUtil.comparePassword(oldPassword, user.password)) {
        throw new ApplicationError(COMMON_ERROR.INTERNAL_SERVER_ERROR);
    }

    if(oldPassword === newPassword) {
        throw new ApplicationError(COMMON_ERROR.INTERNAL_SERVER_ERROR);
    }

    if(newPassword === '' || newPassword === null) {
        throw new ApplicationError(COMMON_ERROR.INTERNAL_SERVER_ERROR);
    }

    if(newPassword.length < 6 && newPassword.length > 32) {
        throw new ApplicationError(COMMON_ERROR.INTERNAL_SERVER_ERROR);
    }

    return await userService.update(userId, {hashPassword: encodedUtil.hashPassword(newPassword)});
}

export default { 
    getIdentity,
    getAll,
    add,
    getByRole,
    getOneByIdentity,
    isExistEmail,
    isExistPhone,
    update,
    remove,
    changePassword
};

