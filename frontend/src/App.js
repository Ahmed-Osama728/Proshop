import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
<<<<<<< HEAD
import OrderScreen from './screens/OrderScreen';
import UsersListScreen from './screens/UsersListScreen';
import ProductsListScreen from './screens/ProductsListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
=======
import OrderDetailsScreen from './screens/OrderDetailsScreen';
>>>>>>> fb81ae0978b89e4a2a835f959b99d76296a17c96

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
<<<<<<< HEAD
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/admin/orderlist" component={OrderListScreen} />
=======
          <Route path="/order/:id" component={OrderDetailsScreen} />
>>>>>>> fb81ae0978b89e4a2a835f959b99d76296a17c96
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
<<<<<<< HEAD
          <Route path="/admin/usersList" component={UsersListScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/admin/userlist" component={UsersListScreen} />
          <Route
            path="/admin/productlist"
            component={ProductsListScreen}
            exact
          />
          <Route
            path="/admin/productlist/:pageNumber"
            component={ProductsListScreen}
            exact
          />{' '}
          <Route path="/admin/user/:id/edit" component={UserEditScreen} />
          <Route path="/search/:keyword" component={HomeScreen} />
          <Route path="/" component={HomeScreen} exact />
=======
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
>>>>>>> fb81ae0978b89e4a2a835f959b99d76296a17c96
        </Container>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
