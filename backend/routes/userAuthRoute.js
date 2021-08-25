import express from 'express';
import {
  getUserProfile,
  registerUser,
  userAuth,
<<<<<<< HEAD
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
=======
  updateUserProfile
} from '../controllers/userAuthController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/login', userAuth);
router.post('/', registerUser);
>>>>>>> fb81ae0978b89e4a2a835f959b99d76296a17c96
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
<<<<<<< HEAD

router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);
=======
>>>>>>> fb81ae0978b89e4a2a835f959b99d76296a17c96
export default router;
