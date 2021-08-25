import express from 'express';
import {
  getUserProfile,
  registerUser,
  userAuth,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser
} from '../controllers/userAuthController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/').post(registerUser).get(protect, admin, getUsers);

router.post('/login', userAuth);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);
export default router;
