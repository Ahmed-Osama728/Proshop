import React, { useState, useEffect } from 'react';
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
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getUserDetails, updateUserProfile } from '../actions/userActions';

const ProfileScreen = ({ location, history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile


  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      if (!user || !user.name) {
        dispatch(getUserDetails('profile'))
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [dispatch, history, userInfo, user])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }))
    }
  }


  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        {error && <Message variant="danger">{error}</Message>}
        {message && <Message variant="danger">{message}</Message>}
        {success && <Message variant="success">User Updated</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <FormGroup controlId="name">
            <FormLabel>Name</FormLabel>
            <FormControl
              value={name}
              type="name"
              placeHolder="Enter name"
              onChange={(e) => setName(e.target.value)}
            ></FormControl>
          </FormGroup>
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
          <FormGroup controlId="confirmPassword">
            <FormLabel>Confirm Password</FormLabel>
            <FormControl
              value={confirmPassword}
              type="confirmPassword"
              placeHolder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></FormControl>
          </FormGroup>
          <Button type="submit" variant="primary">
            Update
          </Button>
        </Form>
      </Col>
      <Col md={9}>
        <h2>My Orders</h2>
      </Col>
    </Row>
  );
};

export default ProfileScreen;
