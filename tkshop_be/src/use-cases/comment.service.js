import mongoose from "mongoose";
import userModel from "../entities/user.entity.js";
import commentModel from "../entities/comment.entity.js";
import productModel from "../entities/product.entity.js";

const getList = async (userId = null, productId = null, sort = { createdAt: -1 }, parentCommentId = null) => {
    return await commentModel.find({
        ...(productId && { productId: productId }),
        ...(userId && { userId: userId }),
        ...{ parentCommentId: parentCommentId }
    }).sort(sort).populate('replies').lean().exec();
}

const getAll = async (sort = null) => {
    return await getList(null, null, sort, null);
}

const getByProduct = async (productId, sort = null) => {
    const product = await productModel.findById(productId).exec();
    if (!product)
        throw new Error("No product found");
    return await getList(null, productId, sort, null);
}

const getByUser = async (userId, sort) => {
    const user = await userModel.findById(userId).exec();
    if (!user)
        throw new Error("No user found");
    return await getList(userId, null, sort, { $exists: true, $ne: null });
}

const getOne = async (commentId) => {
    return await commentModel.findById(commentId).populate(`replies`).lean().exec();
}


const create = async (data, userId) => {

    const comment = new commentModel({
        _id: new mongoose.Types.ObjectId(),
        ...data
    })

    if (!(await productModel.findById(data.productId).exec()))
        throw new Error("No product found");

    if (!(await userModel.findById(userId).exec()))
        throw new Error("No user found");
    Object.assign(comment, { userId: userId });

    if (data.parentCommentID) {
        if (!(await commentModel.findById(data.parentCommentId).exec()))
            throw new Error("No parrent comment found");
        await commentModel.findByIdAndUpdate(data.parentCommentId, {
            $addToSet: { replies: comment._id }
        });
    }

    return comment.save();
}

const checkOwner = async (commentId, userId) => {
    const comment = await commentModel.findById(commentId).exec();
    if (!comment)
        throw new Error("No comment found");
    if (comment.userId.toString() !== userId)
        throw new Error("Unauthorization");
}

const update = async (data, commentId, userId) => {
    await checkOwner(commentId, userId);
    if (data.productId) delete data.productId;
    if (data.userId) delete data.userId;
    return await commentModel.findByIdAndUpdate(commentId, data, { new: true });
}

const softDelete = async (commentId, userId) => {
    await checkOwner(commentId, userId);
    const comment = await commentModel.findById(commentId).exec();
    return await commentModel.findByIdAndUpdate(commentId, { isDelete: !comment.isDelete }, { new: true })
}

const remove = async (commentId, userId) => {
    await checkOwner(commentId, userId);
    return !!(await commentModel.findByIdAndDelete(commentId));
}

export default {
    getList,
    getAll,
    getByProduct,
    getByUser,
    create,
    update,
    softDelete,
    remove,
    getOne
};