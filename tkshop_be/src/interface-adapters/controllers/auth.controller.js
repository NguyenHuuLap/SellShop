import httpStatus from "http-status";
import authService from "../../use-cases/auth.service.js"
import responseUtil from "../../utils/response.util.js";

export const login = async (req, res, next) => {
    try {
        const result = await authService.authenticate(req.body.email, req.body.password, req.ipv4)
        res.status(200).json(result);
    }
    catch (err) {
        res.json({
            message: err.message,
            error: err
        });
        next(err);
    }
}

export const loginWithGoogle = async (req, res, next) => {
    try {
        const result = await authService.authenticateWithGoogle(req.user);
        responseUtil.response(res, httpStatus.OK, `User ${req.user.email} login success`, result)
    }
    catch (err) {
        console.log(err);
        next(err);
    }
}

export const logout = async (req, res, next) => {
    
}