import React from "react";
import Logo from "../../assets/img/logo/ScubaLiving_logo_small.svg";
import LoginIcon from "../../assets/img/login-icon/lock-icon-300x300.png";
import { NavLink, withRouter } from "react-router-dom";
import "../../assets/scss/NavBar/NavBar.scss";

const NavBar = () => {
  return (
    <header>
      <nav>
        <img className="brandLogo" src={Logo} alt="Scuba Living Company Logo" />
        <ul className="menu">
          <li className="menuItems">
            <NavLink className="navLink" to="/scubaliving/" exact>
              HOME
            </NavLink>
          </li>
          <li className="menuItems">
            <NavLink className="navLink" to="/scubaliving/products">
              DYKKERUDSTYR
            </NavLink>
          </li>
          <li className="menuItems">
            <NavLink className="navLink" to="/scubaliving/travels">
              DYKKERREJSER
            </NavLink>
          </li>
          <li className="menuItems">
            <NavLink className="navLink" to="/scubaliving/course">
              DYKKERKURSER
            </NavLink>
          </li>
          <li className="menuItems">
            <NavLink className="navLink" to="/scubaliving/contact">
              KONTAKT
            </NavLink>
          </li>
          <li className="menuItems">
            <NavLink className="navLink" to="/scubaliving/about">
              OM OS
            </NavLink>
          </li>
        </ul>
        <div className="search">
          <input
            placeholder="Search"
            aria-label="search"
            type="search"
            id="search"
            name="search"
          />
          <button id="searchButton" type="submit">
            Search
          </button>
        </div>

        <div className="login">
          <img src={LoginIcon} alt="KeyPad Login Logo" className="loginIcon" />
          <div className="buttons">
            <NavLink
              className="navLink"
              id="loginButton"
              to="/scubaliving/login"
            >
              LOGIN
            </NavLink>
            <NavLink
              className="navLink"
              id="registerButton"
              to="/scubaliving/opret"
            >
              REGISTER
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default withRouter(NavBar);
