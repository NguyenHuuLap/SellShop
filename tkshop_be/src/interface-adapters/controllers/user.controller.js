import userService from "../../use-cases/user.service.js";
import mongoose from "mongoose";

export const getAll = async (req, res, next) => {
    try {
        let users = await userService.getAll();
        res.json(users);
    } catch (err) { 
        res.json({
            message: err.message,
            error: err
          });
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
        const newUser = await userService.getByRole(req.body.role);
        res.json(newUser);
    } catch (err) { 
        res.json({
            message: err.message,
            error: err
          });
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


// export default { getAll };