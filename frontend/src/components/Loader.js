import React from 'react';
import { Spinner } from 'react-bootstrap';
const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        widht: '100 px',
        height: '100px',
        matgin: 'auto',
        display: 'block'
      }}
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default Loader;
