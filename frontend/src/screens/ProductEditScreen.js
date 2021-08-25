import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Button,
  FormControl,
  FormLabel,
  Form,
  FormGroup
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { productDetails, updateProduct } from '../actions/productActions';
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants';

const ProductEditScreen = ({ history, match }) => {
  const productId = match.params.id;

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [uploading, setUploading] = useState(false);
  const [brand, setBrand] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState(0);

  const dispatch = useDispatch();

  const productDetailss = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetailss;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    success: successUpdate,
    error: errorUpdate
  } = productUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      history.push('/admin/productslist');
    }

    if (!product.name || product._id !== productId) {
      dispatch(productDetails(productId));
    } else {
      setName(product.name);
      setPrice(product.price);
      setImage(product.image);
      setDescription(product.description);
      setBrand(product.brand);
      setCategory(product.category);
      setCountInStock(product.countInStock);
    }
  }, [dispatch, history, product, productId, successUpdate]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];

    const formData = new FormData();

    formData.append('image', file);
    setUploading(true);

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };

      const { data } = await axios.post('/api/upload', formData, config);

      setImage(data);
      setUploading(false);
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        description,
        brand,
        category,
        countInStock,
        image
      })
    );
  };
  return (
    <>
      <Link to="/admin/productsList" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Product</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}

        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
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
            <FormGroup controlId="price">
              <FormLabel>Price</FormLabel>
              <FormControl
                value={price}
                type="number"
                placeHolder="Enter Price"
                onChange={(e) => setPrice(e.target.value)}
              ></FormControl>
            </FormGroup>
            <FormGroup controlId="Image">
              <FormLabel>Image</FormLabel>
              <FormControl
                value={image}
                type="text"
                placeHolder="Set Image Url"
                onChange={(e) => setImage(e.target.value)}
              ></FormControl>
              <Form.File
                id="image-file"
                label="choose an image"
                custom
                onChange={uploadFileHandler}
              ></Form.File>
              {uploading && <Loader />}
            </FormGroup>
            <FormGroup controlId="Decription">
              <FormLabel>Decription</FormLabel>
              <FormControl
                value={description}
                type="text"
                placeHolder="Enter Decription"
                onChange={(e) => setDescription(e.target.value)}
              ></FormControl>
            </FormGroup>
            <FormGroup controlId="Brand">
              <FormLabel>Brand</FormLabel>
              <FormControl
                value={brand}
                type="text"
                placeHolder="Enter brand"
                onChange={(e) => setBrand(e.target.value)}
              ></FormControl>
            </FormGroup>
            <FormGroup controlId="Category">
              <FormLabel>Category</FormLabel>
              <FormControl
                value={category}
                type="text"
                placeHolder="Enter Category"
                onChange={(e) => setCategory(e.target.value)}
              ></FormControl>
            </FormGroup>
            <FormGroup controlId="CountInStock">
              <FormLabel>Count In Stock</FormLabel>
              <FormControl
                value={countInStock}
                type="number"
                placeHolder="Enter Count In Stock Number"
                onChange={(e) => setCountInStock(e.target.value)}
              ></FormControl>
            </FormGroup>

            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default ProductEditScreen;
