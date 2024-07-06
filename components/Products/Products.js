// Products.js
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../pages/Redux/Cart/Actions/index';

const ProductDetails = ({ productInfo }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(productInfo));
  };

  if (!productInfo) return <h1>Loading...</h1>;

  return (
    <div>
      <div>
        <h5>{productInfo.title}</h5>
        <p>ID: {productInfo.id}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
