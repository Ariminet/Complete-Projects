import React from 'react';
import ProductsList from './ProductsList';

const ProductsMap = props => {
  const allProducts = props.allProductsProps.map(p => {
    return <ProductsList productProp={p} />;
  });
  return <div className="allProducts">{allProducts}</div>;
};

export default ProductsMap;
