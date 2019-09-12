import React from 'react';
import { Link } from 'react-router-dom';

function Product(props) {
  return (
    <div className="Product" style={{}}>
      <h3>{props.name}</h3>
      <Link 
        to={{
          pathname: '/product-detail',
          state: props
        }}
      >
        <img src={props.image} />
      </Link>
    </div>
  );
}

export default Product;