import React, { useState } from "react";
import ProductsMap from "./ProductsMap";
import "../../assets/scss/Products/Products.scss";

const Products = props => {
  const [product] = useState([
    {
      productImg: "./assets/img/products/reg.jpg",
      productCaption: "REGULATOR MED RESIST",
      productPris: "KR. 899,-"
    },
    {
      productImg: "./assets/img/products/fine.jpg",
      productCaption: "REJSEFINNE",
      productPris: "KR. 999,-"
    },
    {
      productImg: "./assets/img/products/ur.jpg",
      productCaption: "DYKKER UR",
      productPris: "KR. 699,-"
    },
    {
      productImg: "./assets/img/products/hanske.jpg",
      productCaption: "COLDWATER GLOVES",
      productPris: "KR. 1499,-"
    }
  ]);
  return (
    <section className="products">
      <h2 id="productsTitle">MEST POPULÆRE DYKKERUDSTYR</h2>
      <ProductsMap allProductsProps={product} />
      <a id="udstyrLink" href="/products">
        SE MERE LÆKKERT UDSTYR HER!
      </a>
    </section>
  );
};

export default Products;
