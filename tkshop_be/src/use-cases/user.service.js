import User from "../entities/user.entity.js";
import mongoose from "mongoose";

async function getAll() {
    return User.find()
        .sort({ createdAt: -1 })
        .lean({ virtuals: true })
        .exec();
}

async function add(data) {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        ...data
    });
    return user.save();
}

async function getByRole(role) {
    return User.find({ role })
      .sort({ createdAt: -1 })
      .lean({ virtuals: true }).exec();
  }

async function getOneById(id) {
    return User.findById(id)
      .lean({ virtuals: needVirtuals })
      .exec();
}

async function isExistEmail(email) {
    const user = await User.findOne({ email }).select('_id');
    return !!user;
}

async function update(id, data) {
    return User.findByIdAndUpdate(id, data);
}


async function remove(id) {
    const user = await User.findOneAndDelete({_id: id});
    return !!user;
  }

export default { getAll, add, getByRole, getOneById, isExistEmail, update, remove};

