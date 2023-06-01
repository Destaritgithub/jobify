import User from '../model/user.js';
import { StatusCodes } from 'http-status-codes';

class CustomAPIError extends Error {
  constructor(message) {
    super(message);
    
  }
}
class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}
class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}
const register = async (req, res) => {
  const { businessName, contactNumber, email, address, password } = req.body;
  if (!businessName || !contactNumber || !email || !address || !password) {
    throw new BadRequestError('please provide all values');
  }
  const user = await User.create({
    businessName,
    contactNumber,
    email,
    address,
    password,
  });

  res.status(StatusCodes.CREATED).json({ user });
};
const login = async (req, res) => {
  res.send('login user');
};
const updateUser = async (req, res) => {
  res.send('update user');
};

export { register, login, updateUser };
