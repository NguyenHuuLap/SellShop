import orderService from "../../use-cases/order.service.js";
import httpStatus from "http-status";
import responseUtil from "../../utils/response.util.js";

export const add = async (req, res, next) => {
    try {
        let order = await orderService.transaction(req.body)
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
        let orders = await orderService.getList();
        if(orders)
            responseUtil.response(res, httpStatus.OK, `Success`, orders);
        else
            responseUtil.response(res, httpStatus.NOT_FOUND, `False`);

    } catch (err){
        next(err);
    }
}