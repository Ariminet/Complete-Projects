import React from 'react';

const ProductsList = props => {
  return (
    <figure className="productItem">
      <img
        src={props.productProp.productImg}
        alt="Dykker udstyr til gode priser"
        className="productImg"
      />
      <figcaption className="productCaption">
        {props.productProp.productCaption}
      </figcaption>
      <p className="pris">{props.productProp.productPris}</p>
    </figure>
  );
};

export default ProductsList;
