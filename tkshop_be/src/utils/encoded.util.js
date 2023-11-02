import bcrypt from 'bcrypt';

const encodedPassword = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10));
const comparePassword = (password, hash) => bcrypt.compareSync(password, hash);

export default {
    encodedPassword,
    comparePassword
};