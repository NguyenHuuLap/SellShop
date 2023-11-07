import orderService from "../../use-cases/order.service.js";
import httpStatus from "http-status";
import responseUtil from "../../utils/response.util.js";
import userService from "../../use-cases/user.service.js";

export const create = async (req, res, next) => {
    try {
        console.log(req.user)
        let order = await orderService.create(req.body, req.user._id)
        if(order)
            responseUtil.response(res, httpStatus.OK, `Success`, order);
        else
            responseUtil.response(res, httpStatus.NOT_FOUND, `False`);

    } catch (err){
        next(err);
    }
}

export const update = async (req, res, next) => {
    try {
        let order = await orderService.update(req.params.orderId , req.body, req.user._id)
        if(order)
            responseUtil.response(res, httpStatus.OK, `Success`, order);
        else
            responseUtil.response(res, httpStatus.NOT_FOUND, `False`);

    } catch (err){
        next(err);
    }
}

export const getByUser = async (req, res, next) => {
    try {

        if(req.user._id && (await userService.getOneByIdentity(req.user_id)))
            responseUtil.response(res, httpStatus.UNAUTHORIZED, `Unathorized`, order);

        let order = await orderService.getList(req.user._id, null, null, null, null)
        if(order) 
            responseUtil.response(res, httpStatus.OK, `Success`, order);
        else
            responseUtil.response(res, httpStatus.NOT_FOUND, `False`);

    } catch (err){
        next(err);
    }
}


export const getAll = async (req, res, next) => {
    try {
        let orders = await orderService.getAll(req.body || null);
        if(orders)
            responseUtil.response(res, httpStatus.OK, `Success`, orders);
        else
            responseUtil.response(res, httpStatus.NOT_FOUND, `False`);

    } catch (err){
        next(err);
    }
}

export const getOne = async (req, res, next) => {
    try {
        let order = await orderService.getOne(req.params.orderId);
        if(order)
            responseUtil.response(res, httpStatus.OK, `Success`, order);
        else
            responseUtil.response(res, httpStatus.NOT_FOUND, `False`);

    } catch (err){
        next(err);
    }
}