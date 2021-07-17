import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';

/*validate the token coming we request from database with GET users/profile (headers)  
by virfing it with the one at env where we generated it and extract decoded info from it (id) 
also extract this user we grab by his token and assign his info but password to req.user 

i can req.user in any other protected route*/

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error('Not Authorized, Token Failed');
    }
    if (!token) {
      res.status(401);
      throw new Error('Not authorized, no token ');
    }
  }
});

export { protect };
