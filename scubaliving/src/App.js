import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components//Contact/Contact";
import Course from "./components/Course/Course";
import Home from "./components/FontPage/FrontPage";
import Products from "./components/Products/Products";
import Travels from "./components/Travels/Travels";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Opret from "./components/Login/Opret";
import OpenHours from "./components/OpenHours/OpenHours";
import Categories from "./components/Categories/Categories";
import "./assets/scss/Responsive/Responsive.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/scubaliving/" component={Home} />
          <Route path="/scubaliving/products" component={Products} />
          <Route path="/scubaliving/travels" component={Travels} />
          <Route path="/scubaliving/course" component={Course} />
          <Route path="/scubaliving/contact" component={Contact} />
          <Route path="/scubaliving/about" component={AboutUs} />
          <Route path="/scubaliving/login" component={Login} />
          <Route path="/scubaliving/opret" component={Opret} />
          <Route path="/scubaliving/openinghours" component={OpenHours} />
          <Route path="/scubaliving/categories" component={Categories} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
