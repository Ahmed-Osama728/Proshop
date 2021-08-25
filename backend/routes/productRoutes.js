import express from 'express';
import {
  getProductById,
<<<<<<< HEAD
  getProducts,
  deleteProduct,
  updateProduct,
  createProduct,
  createProductReview
} from '../controllers/productController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id/reviews').post(protect, createProductReview);

router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);
=======
  getProducts
} from '../controllers/productController.js';
const router = express.Router();

router.route('/').get(getProducts);

router.route('/:id').get(getProductById);
>>>>>>> fb81ae0978b89e4a2a835f959b99d76296a17c96

export default router;
