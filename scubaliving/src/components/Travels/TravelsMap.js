import React from "react";
import TravelsList from "./TravelsList";

const TravelsMap = props => {
  const allTravels = props.allTravelsProps.map(t => {
    return <TravelsList travelProp={t} />;
  });
  return <div className="allTravels">{allTravels}</div>;
};

export default TravelsMap;
