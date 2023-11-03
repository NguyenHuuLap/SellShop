import httpStatus from "http-status";
import { HTTP_STATUS } from "../../constants.js";
import userService from "../../use-cases/user.service.js";
import responseUtil from "../../utils/response.util.js";
import encodedUtil from "../../utils/encoded.util.js";

export const getAll = async (req, res, next) => {
    try {
        console.log(encodedUtil.genRandomPassword());
        let users = await userService.getAll();
        if(users.length > 0 && users)
            responseUtil.response(res, httpStatus.OK, `Get all user`, users);
        else
            responseUtil.response(res, httpStatus.NOT_FOUND, `There are no user`);
    } catch (err) { 
        next(err); 
    }
}


export const add = async (req, res, next) => {
    try {
        const newUser = await userService.add(req.body);
        res.json(newUser);
    } catch (err) { 
        res.json({
            message: err.message,
            error: err
          });
        next(err); 
    }
}

export const getByRole = async (req, res, next) => {
    try {
        const users = await userService.getByRole(req.body.role);
        if(users.length > 0 && users)
            responseUtil.response(res, httpStatus.OK, `Get all ${req.body.role} user`, users);
        else
            responseUtil.response(res, httpStatus.NOT_FOUND, `There are no ${req.body.role} user`);
    } catch (err) { 
        next(err); 
    }
}

export const getOneByIdentity = async (req, res, next) => {
    try {
        const user = await userService.getOneByIdentity(req.params.identity);
        res.json(user);
    } catch (err) { 
        res.json({
            message: err.message,
            error: err
          });
        next(err); 
    }
}

export const update = async (req, res, next) => {
    try {
        const updatedUser = await userService.update(req.params.userId, req.body);
        res.json(updatedUser);
    } catch (err) { 
        res.json({
            message: err.message,
            error: err
          });
        next(err); 
    }
}

export const remove = async (req, res, next) => {
    try {
        const updatedUser = await userService.remove(req.params.identity);
        res.json(updatedUser);
    } catch (err) { 
        res.json({
            message: err.message,
            error: err
          });
        next(err); 
    }
}
