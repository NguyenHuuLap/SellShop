import mongoose from 'mongoose';
import mongooseLeanVirtuals from 'mongoose-lean-virtuals';
import constants from '../constants.js';

const userSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    firstname: {
        type: String,
        trim: true,
        require: true,
        minLength: 1,
        maxLength: 50
    },
    lastName: {
        type: String,
        trim: true,
        require: true,
        minLength: 1,
        maxLength: 50
    },
    email: {
        type: String,
        match: [constants.REGEX.EMAIL, 'Please fill a valid email address'],
        trim: true,
        index: {
            unique: true,
            partialFilterExpression: { email: { $type: 'string' } }
        }
    },
    password: {
        type: String,
        trim: true,
    },
    emptyPassword: {
        type: Boolean,
        trim: true,
    },
    phone: {
        type: String,
        match: [constants.REGEX.PHONE, 'Please fill a valid phone number'],
        trim: true,
        index: {
            unique: true,
            partialFilterExpression: { phone: { $type: 'string' } },
        }
    },
    role: {
        type: String,
        enum: Object.values(constants.USER.ROLE),
        default: constants.USER.ROLE.CUSTOMER,
        required: true
    },
    status: {
        type: String,
        enum: Object.values(constants.USER.STATUS),
        default: constants.USER.STATUS.INACTIVE,
        required: true
    },
    avatar: {
        type: String,
        trim: true,
        required: false
    },
    birth: { 
        type: Date, 
        trim: true, 
        required: false 
    },
})


userSchema.virtual('fullName').
  get(function () { return `${this.firstName} ${this.lastName}`; }).
  set(function (v) {
    const firstName = v.substring(0, v.indexOf(' '));
    const lastName = v.substring(v.indexOf(' ') + 1);
    this.set({ firstName, lastName });
  });

userSchema.plugin(mongooseLeanVirtuals);

const userModel = mongoose.model('User', userSchema);
export default userModel;