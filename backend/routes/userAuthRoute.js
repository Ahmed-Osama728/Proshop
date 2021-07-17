import express from 'express';
import {
  getUserProfile,
  registerUser,
  userAuth,
  updateUserProfile
} from '../controllers/userAuthController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/login', userAuth);
router.post('/', registerUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
export default router;
