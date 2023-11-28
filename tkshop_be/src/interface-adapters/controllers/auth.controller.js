import httpStatus from "http-status";
import authService from "../../use-cases/auth.service.js"
import responseUtil from "../../utils/response.util.js";
import userService from "../../use-cases/user.service.js";

export const login = async (req, res, next) => {
    try {
        const result = await authService.authenticate(req.body.email, req.body.password)
        if(result){
            res.status(200).json(result.token);
        }else{
            res.status(500).json({message: `login fail`});
        }
    }
    catch (err) {
        res.json({
            message: err.message,
            error: err
        });
        next(err);
    }
}

export const register = async(req,res, next) =>{
    try{
        const newUser = await authService.register(req.body.email, req.body.password, req.body.confirmpassword, req.body);
        if(newUser){
            res.status(200).json({message: 'Bạn đã đăng ký tài khoản thành công', newUser});
        }
        else{
            res.status(500).json({message: 'đã có lỗi xảy ra'});
        }
    }catch(err){
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