import express from 'express';
import {
  addOrderItems,
<<<<<<< HEAD
  getMyOrders,
  getOrderById,
  getOrders,
  updateOrderToDeliver,
  updateOrderToPaid
} from '../controllers/orderController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders);
router.route('/myorders').get(protect, getMyOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrderToPaid);
router.route('/:id/deliver').put(protect, admin, updateOrderToDeliver);
=======
  getOrderById,
  updateOrderToPaid
} from '../controllers/orderController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, addOrderItems);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrderToPaid);
>>>>>>> fb81ae0978b89e4a2a835f959b99d76296a17c96
export default router;
