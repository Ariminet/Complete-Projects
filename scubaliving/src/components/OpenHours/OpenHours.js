import React from "react";
import "../../assets/scss/openhours/openhours.scss";

const OpenHours = () => {
  return (
    <div id="openHours">
      <div id="days">
        <h4 className="openDays">MON</h4>
        <h4 className="openDays">TUE</h4>
        <h4 className="openDays">WED</h4>
        <h4 className="openDays">THU</h4>
        <h4 className="openDays">FRI</h4>
        <h4 className="openDays">SAT</h4>
        <h4 className="openDays">SUN</h4>
      </div>
      <div id="hours">
        <h4 className="openHours">7:30 AM - 2:30PM</h4>
        <h4 className="openHours">7:30 AM - 2:30PM</h4>
        <h4 className="openHours">7:30 AM - 2:30PM</h4>
        <h4 className="openHours">7:30 AM - 2:30PM</h4>
        <h4 className="openHours">7:30 AM - 2:30PM</h4>
        <h4 className="openHours">7:30 AM - 2:30PM</h4>
        <h4 className="openHours">7:30 AM - 2:30PM</h4>
      </div>
    </div>
  );
};

export default OpenHours;
