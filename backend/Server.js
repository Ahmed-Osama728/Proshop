import express from 'express';
<<<<<<< HEAD
import path from 'path';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import morgan from 'morgan';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userAuthRoute.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';

dotenv.config();
connectDB();
const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
=======
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userAuthRoute.js';
import orderRoutes from './routes/orderRoutes.js';
import { errorHandler, notFound } from './middlewares/errorMiddleware.js';
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  res.send('API is running');
});
>>>>>>> fb81ae0978b89e4a2a835f959b99d76296a17c96

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
<<<<<<< HEAD
app.use('/api/upload', uploadRoutes);
=======
>>>>>>> fb81ae0978b89e4a2a835f959b99d76296a17c96

app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLINT_ID)
);
<<<<<<< HEAD

const __dirname = path.resolve();
app.use('/upload', express.static(path.join(__dirname, '/uploads')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running');
  });
}
n;
=======
>>>>>>> fb81ae0978b89e4a2a835f959b99d76296a17c96
app.use(notFound);

app.use(errorHandler);
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
