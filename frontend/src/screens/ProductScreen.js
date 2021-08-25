import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  Col,
  Form,
  FormControl,
  Image,
  ListGroup,
  ListGroupItem,
  Row
} from 'react-bootstrap';
import Rating from '../components/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { createProductReview, productDetails } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants';

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  const listProductDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = listProductDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productCreateReview = useSelector((state) => state.productCreateReview);
  const {
    error: errorReview,
    success: successReview,
    loading: loadingReview
  } = productCreateReview;

  useEffect(() => {
    if (successReview) {
      alert('Review Submitted');
      setComment('');
      setRating(0);
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(productDetails(match.params.id));
  }, [dispatch, match, successReview]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProductReview(match.params.id, {
        comment,
        rating
      })
    );
  };
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger" />
      ) : (
        product && (
          <>
            <Row>
              <Col md={6}>
                <Image src={product.image} alt={product.name} fluid></Image>
              </Col>
              <Col md={3}>
                <ListGroup variant="flush">
                  <ListGroup.Item>{product.name}</ListGroup.Item>
                  <ListGroup.Item>
                    <Rating
                      value={product.rating}
                      text={`${product.numReviews} Reviews`}
                    ></Rating>
                  </ListGroup.Item>
                  <ListGroupItem>Price: {product.price}</ListGroupItem>
                  <ListGroupItem>
                    Description: {product.description}
                  </ListGroupItem>
                </ListGroup>
              </Col>
              <Col md={3}>
                <Card>
                  <ListGroup>
                    <ListGroupItem>
                      <Row>
                        <Col>Price:</Col>
                        <Col>{product.price}</Col>
                      </Row>{' '}
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col>Status:</Col>
                        <Col>
                          {product.countInStock > 0
                            ? 'In Stock'
                            : 'Out Of Stock'}
                        </Col>
                      </Row>{' '}
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col>Quatity: </Col>
                        <Col>
                          <FormControl
                            as="select"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </FormControl>
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Button
                        onClick={addToCartHandler}
                        type="button"
                        className="btn btn-block"
                        disabled={product.countInStock === 0}
                      >
                        Add To Cart
                      </Button>
                    </ListGroupItem>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <h2>Reviews</h2>
                {product.reviews.length === 0 && (
                  <Message>There is No Reviews</Message>
                )}
                {product.reviews.map((review) => (
                  <ListGroup variant="flush">
                    <ListGroup.Item key={review._id}>
                      <strong>{review.name}</strong>
                      <Rating value={review.rating} />
                      <p>{review.createdAt.substring(0, 10)}</p>
                      <p>{review.comment}</p>
                    </ListGroup.Item>
                  </ListGroup>
                ))}
                <ListGroup.Item>
                  <h2>Write a customer Review</h2>
                  {successReview && (
                    <Message variant="success">
                      Review Submitted Successfully
                    </Message>
                  )}
                  {loadingReview && <Loader />}
                  {errorReview && (
                    <Message variant="danger">{errorReview} </Message>
                  )}
                  {userInfo ? (
                    <h1>
                      <Form onSubmit={submitHandler}>
                        <Form.Group controlId="rating">
                          <Form.Label>Rating</Form.Label>
                          <Form.Control
                            as="select"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                          >
                            <option value="">Select...</option>
                            <option value="1">1 - poor</option>
                            <option value="2">2 - fair</option>
                            <option value="3">3 - good</option>
                            <option value="4">4 - Very Good</option>
                            <option value="5">5 - Excellent</option>
                          </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="comment">
                          <Form.Label>comment</Form.Label>
                          <Form.Control
                            as="textarea"
                            row="3"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                          ></Form.Control>
                        </Form.Group>
                        <Button type="submit" variant="primary">
                          Submit
                        </Button>
                      </Form>
                    </h1>
                  ) : (
                    <Message>
                      Please <Link to="/login">Sign in</Link>{' '}
                    </Message>
                  )}
                </ListGroup.Item>
              </Col>
            </Row>
          </>
        )
      )}
    </>
  );
};

export default ProductScreen;
