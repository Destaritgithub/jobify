import mongoose from 'mongoose';
import validator from 'validator';

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
  },
});

export default mongoose.model('User', UserSchema);
