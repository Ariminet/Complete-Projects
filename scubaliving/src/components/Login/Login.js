import React from "react";
import "../../assets/scss/Login/Login.scss";
const Login = () => {
  const handleSubmit = e => {
    e.preventDefault();
    alert("Youve Logged in");
  };
  return (
    <div id="loginContainer">
      <h2 id="logonTitle">Logon</h2>
      <form className="Login" onSubmit={handleSubmit}>
        {/* <label id="userLabel" HtmlFor="username">
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

        {/* <label id="passwordLabel" HtmlFor="password">
          Password:
        </label> */}
        <input
          aria-label="password"
          placeholder="Password"
          required
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          type="password"
          name="username"
          id="password"
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
