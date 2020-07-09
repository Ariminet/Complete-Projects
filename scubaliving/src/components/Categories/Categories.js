import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "../../assets/scss/categories/categories.scss";
const Categories = () => {
  return (
    <div id="categories">
      <div className="links" id="link1">
        <NavLink className="categoriLink" to="/scubaliving/products">
          DYKKERUDSTYR
        </NavLink>
      </div>
      <div className="links" id="link2">
        <NavLink className="categoriLink" to="/scubaliving/travels">
          DYKKERREJSER
        </NavLink>
      </div>
      <div className="links" id="link3">
        <NavLink className="categoriLink" to="/scubaliving/course">
          DYKKERKURSER
        </NavLink>
      </div>
    </div>
  );
};

export default withRouter(Categories);
