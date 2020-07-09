import React from "react";
import "../../assets/scss/FrontPage/FrontPage.scss";
import AboutUs from "../AboutUs/AboutUs";
import Course from "../Course/Course";
import Products from "../Products/Products";
import Travels from "../Travels/Travels";

const FrontPage = () => {
  return (
    <div className="content">
      <AboutUs />
      <Products />
      <Travels />
      <Course />
    </div>
  );
};

export default FrontPage;
