import jwt  from "jsonwebtoken"

const genToken = (payload) => jwt.sign(payload, key, expiresTime);
const verifyToken = (token) => jwt.verify(token, key);

export default {
    genToken,
    verifyToken
};