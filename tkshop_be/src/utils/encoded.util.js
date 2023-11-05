import bcrypt from 'bcrypt';

const encodedPassword = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10));
const comparePassword = (password, hash) => bcrypt.compareSync(password, hash);

const genRandomPassword = () => {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numericChars = '0123456789';
    const allChars = lowercaseChars + uppercaseChars + numericChars;
    const length = 18;

    let password = '';
    password += getRandomInString(lowercaseChars) + getRandomInString(uppercaseChars) + getRandomInString(numericChars);

    for(let i = 0; i < length - 3; i++) {
        password += getRandomInString(allChars);
    }
    return password;
}

const getRandomInString = (str) => {
    return str[Math.floor(Math.random()*str.length)];
}

export default {
    encodedPassword,
    comparePassword,
    genRandomPassword,
    getRandomInString
};