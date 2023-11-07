import mongoose from 'mongoose';
import mongooseLeanVirtuals from 'mongoose-lean-virtuals';
import constants from '../constants.js';

const orderSchema = mongoose.Schema(
  {
    _id: mongoose.Types.ObjectId,
    customer: {
      type: {
        name: { type: String, trim: true, required: true },
        phone: { type: String, trim: true, required: true },
      },
      required: false
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    isReceiveAtStore: { type: Boolean, default: false },
    status: {
      type: String,
      enum: Object.values(constants.ORDER.STATUS),
      default: constants.ORDER.STATUS.PENDING,
      required: true
    },
    paymentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Payment' },
    paymentStatus: {
      type: String,
      enum: Object.values(constants.ORDER.PAYMENT_STATUS),
      default: constants.ORDER.PAYMENT_STATUS.PENDING,
      required: true
    },
    items: [{
      productId: { type: String, required: true },
      sku: { type: String, required: true },
      productName: { type: String, required: false },
      variantName: { type: String, required: false },
      thumbnail: { type: String, required: false },
      marketPrice: { type: Number, required: false },
      pricePerUnit: { type: Number, required: true },
      quantity: { type: Number, required: true }
    }],
    subTotal: { type: Number, required: true },     
    shippingFee: { type: Number, required: true }, 
    discount: { type: mongoose.Schema.Types.ObjectId, ref: 'Discount' },
    total: { type: Number, required: true },  
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { _id: true, id: false, timestamps: true, versionKey: false, }
);


orderSchema.pre('save', async function (next) {

  if (!this?.customer && !this?.user) {
    return next(new Error('Invalid customer or user'));
  }

  if (this.isReceiveAtStore) {
    this.address = null;
  } 

  next();
});

const orderModel = mongoose.model('Order', orderSchema);
export default orderModel;