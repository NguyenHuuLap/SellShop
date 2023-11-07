import { COMMON_ERROR } from "../constants.js";
import encodedUtil from "../utils/encoded.util.js";
import { ApplicationError } from "../utils/error.util.js";
import jwtUtil from "../utils/jwt.util.js";
import userService from "./user.service.js"

const authenticate = async (email, password) => {
    const user = await userService.getOneByIdentity(email);
    if(!user)  throw new ApplicationError(COMMON_ERROR.RESOURCE_NOT_FOUND);
    if(!encodedUtil.comparePassword(password, user.hashpassword)) throw new Error("Invalid Password")
    const token = jwtUtil.genToken({email: user.email, _id: user._id});

    return{ user, token};
}

const authenticateWithGoogle = async (user) => {
    const token = jwtUtil.genToken({email: user.email, _id: user._id});
    return{ user, token};
}

export default {
    authenticate,
    authenticateWithGoogle
};