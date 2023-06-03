import mongoose from 'mongoose';
import validator from 'validator';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

const UserSchema = new mongoose.Schema({
  businessName: {
    type: String,
    required: [true, 'please provide businessName'],
    minLength: [3, 'businessName is too short!'],
    maxlength: 20,
    trim: true,
  },
  contactNumber: {
    type: Number,
    required: [true, 'What is your contact number?'],
  },

  email: {
    type: String,
    required: [true, 'please provide email'],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: 'please provide a valid email',
    },
  },
  address: {
    type: String,
    trim: true,
    maxlength: 20,
  },
  businessType: {
    type: String,
    default: 'Private',
  },
  password: {
    type: String,
    required: [true, 'please provide password'],
    minlength: 6,
    select: false,
  },
});

UserSchema.pre('save', async function () {
  const salt = await bcryptjs.genSalt(10);
  this.password = await bcryptjs.hash(this.password, salt);
  //console.log(this.password);
});
UserSchema.methods.createJWT = function () {
  //console.log(this);
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

export default mongoose.model('User', UserSchema);
