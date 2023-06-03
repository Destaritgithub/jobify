import User from '../model/user.js';
import { StatusCodes } from 'http-status-codes';
import { badRequest, notFound } from '../errors/index.js';

const register = async (req, res) => {
  const { businessName, contactNumber, email, address, password } = req.body;
  if (!businessName || !contactNumber || !email || !address || !password) {
    throw new badRequest('please provide all values');
  }
  const emailAlreadyExist = await User.findOne({ email });
  if (emailAlreadyExist) {
    throw new badRequest('Email already in use');
  }
  const user = await User.create({
    businessName,
    contactNumber,
    email,
    address,
    password,
  });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ user, token });
};
const login = async (req, res) => {
  res.send('login user');
};
const updateUser = async (req, res) => {
  res.send('update user');
};

export { register, login, updateUser };
