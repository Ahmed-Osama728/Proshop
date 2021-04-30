import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <div>
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top"></Card.Img>
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Text as="div">
              <strong>{product.name}</strong>
            </Card.Text>
          </Link>
          <Card.Text as="div">
            <div className="my-3">
              <Rating
                value={product.rating}
                text={`${product.numReviews} Reviews`}
              />
            </div>
          </Card.Text>
          <Card.Text as="div">
            <h3>$ {product.price}</h3>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
