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
<<<<<<< HEAD
      throw new Error('Not Authorized, No Token ');
=======
      throw new Error('Not authorized, no token ');
>>>>>>> fb81ae0978b89e4a2a835f959b99d76296a17c96
    }
  }
});

<<<<<<< HEAD
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error('Not Authorized, User is Not an admin ');
  }
};
export { protect, admin };
=======
export { protect };
>>>>>>> fb81ae0978b89e4a2a835f959b99d76296a17c96
