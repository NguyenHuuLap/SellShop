import { REGEX } from "../../constants.js";
import jwtUtil from "../../utils/jwt.util.js";
import stringformatUtils from "../../utils/stringformat.utils.js";

const jwtAuth = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (!token) { return next(); }

    if (stringformatUtils.isToken(token)) {
      token = token.match(REGEX.TOKEN)[0].split(' ')[1];
    } else {
      return next();
    }
    const decoded = jwtUtil.verifyToken(token);
    if (!decoded) { return next(); }
    req.user = decoded;
    next();
}

export default {
    jwtAuth
};