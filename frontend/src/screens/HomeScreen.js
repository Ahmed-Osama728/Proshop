import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';
import { useDispatch, useSelector } from 'react-redux';
import { productList } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
<<<<<<< HEAD
import Paginate from '../components/Paginate';

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  // const pageNumber = match.params.pageNumber || 1;

=======

const HomeScreen = () => {
>>>>>>> fb81ae0978b89e4a2a835f959b99d76296a17c96
  const dispatch = useDispatch();

  const listProducts = useSelector((state) => state.productList);

<<<<<<< HEAD
  const { loading, products, error, page, pages } = listProducts;

  useEffect(() => {
    dispatch(productList(keyword));
  }, [dispatch, keyword]);
=======
  const { loading, products, error } = listProducts;

  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);
>>>>>>> fb81ae0978b89e4a2a835f959b99d76296a17c96
  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader>LOADING ...</Loader>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        products && (
          <>
            <Row>
              {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
<<<<<<< HEAD
            <Paginate
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ''}
            />
=======
>>>>>>> fb81ae0978b89e4a2a835f959b99d76296a17c96
          </>
        )
      )}
    </div>
  );
};

export default HomeScreen;
