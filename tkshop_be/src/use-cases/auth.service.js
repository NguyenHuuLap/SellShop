import { COMMON_ERROR } from "../constants.js";
import ApiErrorUtils from "../utils/ApiErrorUtils.js";
import encodedUtil from "../utils/encoded.util.js";
import { ApplicationError } from "../utils/error.util.js";
import jwtUtil from "../utils/jwt.util.js";
import userService from "./user.service.js"

const authenticate = async (email, password) => {
    const user = await userService.getOneByIdentity(email);
    if(!user)  throw new ApplicationError(COMMON_ERROR.RESOURCE_NOT_FOUND);
    if(!(await encodedUtil.comparePassword(password, user.hashpassword))) throw new Error("Invalid Password")
    const token = jwtUtil.genToken({email: user.email, _id: user._id});
    return{ token};
}

const register = async(email, password, confirmPassword, data) =>{
    console.log(password);
    if (password !== confirmPassword) {
        throw ApiErrorUtils.simple(`Mật khẩu và xác nhận mật khẩu không khớp`, 400);
    }
    const checkEmail = await userService.isExistEmail(email);
    if(checkEmail){
        throw ApiErrorUtils.simple(`Email đã tồn tại`, 400)
    }else{
        const hashPassword = await encodedUtil.encodedPassword(password);
        Object.assign(data, { hashpassword: hashPassword });
        const newUser = await userService.add(data);
        return newUser;
    }
}

const authenticateWithGoogle = async (user) => {
    const token = jwtUtil.genToken({email: user.email, _id: user._id});
    return{ token};
}

export default {
    authenticate,
    authenticateWithGoogle,
    register
};