import mongoose from 'mongoose';
import slugGenerator from 'mongoose-slug-updater';
// import removeMultiSpace from './plugins/remove-multi-space.js';
// import constants from '../constants.js';

const autoPopulateReplies = function (next) {
  this.populate('replies');
  next();
};

const commentSchema = mongoose.Schema(
  {
    _id: mongoose.Types.ObjectId,
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false, default: null },
    content: { type: String, trim: true, required: true },
    star: { type: String, default: 0, min: 1, max: 5 },
    replies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    likes: { type: Number, default: 0 },
  },
  { timestamps: true, versionKey: false }
);

commentSchema.plugin(slugGenerator);
commentSchema
  .pre('findOne', autoPopulateReplies)
  .pre('find', autoPopulateReplies);

const commentModel = mongoose.model('Comment', commentSchema);
export default commentModel;