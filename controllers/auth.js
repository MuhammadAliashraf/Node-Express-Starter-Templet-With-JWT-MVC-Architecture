const Users = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  const user = await Users.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  //generate token
  const token = await user.createJWT();
  res.status(StatusCodes.OK).json({
    user: { name: user.name }, // Returning The User name From Model
    token,
  });
};

const register = async (req, res) => {
  const user = await Users.create({ ...req.body });
  // const token = user.createJWT();
  // const email= user@gmail.com
  // await sendWelcomeEmail(email); // Send Welcome Email 
  res.status(StatusCodes.CREATED).json({
    success: true,
    message: "User registered successfully",
    // token:token // If Need 
  });
};

module.exports = {
  login,
  register,
};
