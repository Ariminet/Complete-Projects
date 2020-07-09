import React from "react";
import "../../assets/scss/AboutUs/AboutUs.scss";
import Cover from "../../assets/img/cover/scuba2.jpg";

const AboutUs = () => {
  return (
    <figure className="cover">
      <img
        src={Cover}
        alt="Scuba diver under water cover"
        className="coverImg"
      />
      <div id="figcaptionContainer">
        <figcaption id="coverCaption">
          THE BEST WAY TO OBSERVE A FISH IS TO BECOME A FISH.
        </figcaption>
        <figcaption id="coverQuote">JACQUES COUSTEAU</figcaption>
      </div>
    </figure>
  );
};

export default AboutUs;
