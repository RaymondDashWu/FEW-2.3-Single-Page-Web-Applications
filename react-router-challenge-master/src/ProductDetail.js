import React from 'react';

function ProductDetail(props) {
// function ProductDetail({name, desc, image_lg, price}) {
  const { name, desc, image_lg, price } = props.location.state
  return (
    <div className="ProducDetail" style={{backgroundColor:'#eef'}}>
      <h1>{name}</h1>
      <p>{desc}</p>
      <p>{price}</p>
      <img src={image_lg} />
    </div>
  );
}

export default ProductDetail;
