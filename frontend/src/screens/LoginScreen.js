import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Col,
  FormControl,
  FormLabel,
  Row,
  Form,
  FormGroup
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { login } from '../actions/userActions';

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, error, loading } = userLogin;
  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <FormGroup controlId="email">
          <FormLabel>Email Address</FormLabel>
          <FormControl
            value={email}
            type="email"
            placeHolder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          ></FormControl>
        </FormGroup>
        <FormGroup controlId="password">
          <FormLabel>Password</FormLabel>
          <FormControl
            value={password}
            type="password"
            placeHolder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          ></FormControl>
        </FormGroup>
        <Button type="submit" variant="primary">
          Sign In
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          New customer?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Register{' '}
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
