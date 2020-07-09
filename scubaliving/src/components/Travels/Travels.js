import React, { useState } from "react";
import TravelMap from "./TravelsMap";
import "../../assets/scss/Travels/Travels.scss";

const Travels = props => {
  const [travel] = useState([
    {
      travelImg: "./assets/img/travels/malta.jpg",
      travelCaption: "MALTA",
      travelText:
        "Oplev skænne malta og det helt fantastiske dyreliv og sammennhold. Vi arrangere til malte hele året rundt"
    },
    {
      travelImg: "./assets/img/travels/norge.jpg",
      travelCaption: "NORGE",
      travelText:
        "Nordeuropas bedste dykkerspots ligger i Norge. Vi har 25 års erfaring med dyk i Norge. Oplev det klareste vand i verden!"
    }
  ]);
  return (
    <section id="travels">
      <h3 id="travelTitle">DYK UD I VERDEN</h3>
      <TravelMap allTravelsProps={travel} />
      <a id="travelLink" href="/travel">
        SE FLERE DESTINATIONER OG MULIGHEDER HER!
      </a>
    </section>
  );
};

export default Travels;
