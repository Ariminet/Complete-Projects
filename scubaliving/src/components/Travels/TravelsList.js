import React from "react";

const TravelsList = props => {
  return (
    <figure className="travelsList">
      <img
        className="travelImg"
        src={props.travelProp.travelImg}
        alt="Dykker resjer til billige penge"
      />
      <div className="textContainer">
        <h3 className="travelCaption">{props.travelProp.travelCaption}</h3>
        <p className="travelText">{props.travelProp.travelText}</p>
      </div>
    </figure>
  );
};

export default TravelsList;
