import React from "react";
import "../../assets/scss/Login/Opret.scss";
const Opret = () => {
  const handleSubmit = e => {
    e.preventDefault();
    alert("Youve been registered!");
  };
  return (
    <div id="opretContainer">
      <h2 id="opretTitle">Create Account</h2>
      <form className="Opret" onSubmit={handleSubmit}>
        {/* <label id="userLabel" for="username">
          Username:
        </label> */}
        <input
          aria-label="username"
          placeholder="Username"
          required
          type="text"
          autoComplete="off"
          name="username"
          id="username"
        />

        {/* <label id="emailLabel" for="email">
          E-mail:
        </label> */}
        <input
          aria-label="email"
          placeholder="E-mail"
          type="email"
          name="email"
          id="email"
        />

        {/* <label id="passwordLabel" for="password">
          Password:
        </label> */}
        <input
          aria-label="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          placeholder="Password must have 8 chars and a Cap letter and number"
          type="password"
          name="password"
          id="password"
        />

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default Opret;
