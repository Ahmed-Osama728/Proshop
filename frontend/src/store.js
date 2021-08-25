import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
<<<<<<< HEAD
  productDeleteReducer,
  productDetailsReducer,
  productListReducer,
  productUpdateReducer,
  productCreateReviewReducer,
  productCreateReducer
=======
  productDetailsReducer,
  productListReducer
>>>>>>> fb81ae0978b89e4a2a835f959b99d76296a17c96
} from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';
import {
  userDetailsReducer,
  userLoginReducer,
<<<<<<< HEAD
  usersListReducer,
  userUpdateReducer,
  userDeleteReducer,
  userUpdateAdminReducer
} from './reducers/userReducers';
import {
  createOrderReducer,
  getMyOrdersReducer,
  getOrderDetailsReducer,
  getOrdersReducer,
  orderDeliverReducer,
=======
  userUpdateReducer
} from './reducers/userReducers';
import {
  createOrderReducer,
  getOrderDetailsReducer,
>>>>>>> fb81ae0978b89e4a2a835f959b99d76296a17c96
  orderPayReducer
} from './reducers/ordersReducers';
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
<<<<<<< HEAD
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productCreateReview: productCreateReviewReducer,
=======
>>>>>>> fb81ae0978b89e4a2a835f959b99d76296a17c96
  cart: cartReducer,
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateReducer,
<<<<<<< HEAD
  usersList: usersListReducer,
  createOrder: createOrderReducer,
  getOrderDetails: getOrderDetailsReducer,
  orderPay: orderPayReducer,
  orderDeliver: orderDeliverReducer,
  getMyOrders: getMyOrdersReducer,
  getOrders: getOrdersReducer,
  userDelete: userDeleteReducer,
  userUpdateAdmin: userUpdateAdminReducer
=======
  createOrder: createOrderReducer,
  getOrderDetails: getOrderDetailsReducer,
  orderPay: orderPayReducer
>>>>>>> fb81ae0978b89e4a2a835f959b99d76296a17c96
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage
  },
  userLogin: { userInfo: userInfoFromStorage }
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
