import React from "react";
import "../../assets/scss/Contact/Contact.scss";
const Contact = () => {
  const handleSubmit = e => {
    e.preventDefault();
    alert("Thank your for your request");
  };
  return (
    <div id="contactContainer">
      <h2 id="contactTitle">Contact us</h2>
      <form id="contactForm" onSubmit={handleSubmit}>
        <input placeholder="Name" type="text" id="nameInput" required />
        <input type="email" placeholder="Email" id="emailInput" required />
        <input type="tel" id="tel" placeholder="Phone Number" required />
        <input type="text" placeholder="Message" id="message" required />
        <button id="submit" type="submit">
          Send Request
        </button>
      </form>
    </div>
  );
};

export default Contact;
