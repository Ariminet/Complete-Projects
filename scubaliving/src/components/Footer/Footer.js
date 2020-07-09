import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "../../assets/scss/Footer/Footer.scss";
const Footer = () => {
  return (
    <footer>
      <h3 className="footerCaption">PRAKTISKE OPLYSNINGER</h3>
      <ul id="fLeft">
        <li className="footerLi">
          <NavLink className="footerLink" to="/scubaliving/about">
            Om Scuba Living
          </NavLink>
        </li>
        <li className="footerLi">
          <NavLink className="footerLink" to="/scubaliving/contact">
            Kontakt
          </NavLink>
        </li>
        <li className="footerLi">
          <NavLink className="footerLink" to="/scubaliving/about">
            Handelsbetingelser
          </NavLink>
        </li>
        <li className="footerLi">
          <NavLink className="footerLink" to="/scubaliving/about">
            Persondatapolitik
          </NavLink>
        </li>
        <li className="footerLi">
          <NavLink className="footerLink" to="/scubaliving/openinghours">
            Åbningstider
          </NavLink>
        </li>
      </ul>
      <h3 className="footerCaption">PRAKTISKE OPLYSNINGN</h3>
      <ul id="fMid">
        <li className="footerLi">
          <NavLink className="footerLink" to="/scubaliving/categories">
            Hovedkategorier
          </NavLink>
        </li>
        <li className="footerLi">
          <NavLink className="footerLink" to="/scubaliving/products">
            Dykkerudstyr
          </NavLink>
        </li>
        <li className="footerLi">
          <NavLink className="footerLink" to="/scubaliving/travels">
            Dykkerrejser
          </NavLink>
        </li>
        <li className="footerLi">
          <NavLink className="footerLink" to="/scubaliving/course">
            Dykkerkurser
          </NavLink>
        </li>
        <li className="footerLi">
          <NavLink className="footerLink" to="/scubaliving/about">
            Service
          </NavLink>
        </li>
      </ul>
      <h3 className="footerCaption">SOCIALE MEDIER - FØLG OS HER:</h3>
      <ul id="fRight">
        <li className="footerLi">
          <a className="footerLink" href="https://www.facebook.com/PADI">
            LinkedIn<i class="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li className="footerLi">
          <a className="footerLink" href="https://www.facebook.com/PADI">
            Facebook<i class="fab fa-facebook-square"></i>
          </a>
        </li>
        <li className="footerLi">
          <a className="footerLink" href="https://www.instagram.com/paditv/">
            Instagram<i class="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default withRouter(Footer);
