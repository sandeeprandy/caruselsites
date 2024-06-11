import React, { useState } from "react";
import { Carousel } from "antd";
import Home from "./Components/Home";
import  Services from "./Components/Services"
import Contact from "./Components/Contect"
import "./Components/SlideOne.css";
import "./Components/Contect"
import Price from "./Components/Price"


const App = () => {
  const [currentPage, setCurrentPage] = useState("Home");

  function onChange(currentSlide: number) {
    switch (currentSlide) {
      case 0:
        setCurrentPage("HOME");
        break;
      case 1:
        setCurrentPage("ABOUT");
        break;
      case 2:
        setCurrentPage("Services");
        break;
      case 3:
        setCurrentPage("Contact");
        break;
      default:
        setCurrentPage("Unknown");
        break;
    }
  }

  return (
    <div>
      <Carousel
        arrows={true}
        afterChange={onChange}
        style={{ marginTop: "20px" }}
      >
        <div className="HomePage">
          <div>
            <span>Home</span>
            <span style={{ margin: "0 10px" }}>About</span>
            <span style={{ margin: "0 10px" }}>Services</span>
            <span style={{ margin: "0 10px" }}>Contact</span>
          </div >
          <p> {currentPage} PAGE </p>
          <Home />
        </div>
        <div  className="AboutPage" > 

        <div>
            <span>Home</span>
            <span style={{ margin: "0 10px" }}>About</span>
            <span style={{ margin: "0 10px" }}>Services</span>
            <span style={{ margin: "0 10px" }}>Contact</span>
          </div >
        <p> {currentPage} PAGE </p>
          <Services />
        </div>
        <div  className="Contact" >
        <div>
            <span>Home</span>
            <span style={{ margin: "0 10px" }}>About</span>
            <span style={{ margin: "0 10px" }}>Services</span>
            <span style={{ margin: "0 10px" }}>Contact</span>
          </div >
        <p> {currentPage} PAGE </p>
          <Contact />
        </div>
        <div className="pricePage">

        <div>
            <span>Home</span>
            <span style={{ margin: "0 10px" }}>About</span>
            <span style={{ margin: "0 10px" }}>Services</span>
            <span style={{ margin: "0 10px" }}>Contact</span>
          </div >
        <p> {currentPage} PAGE </p>
          <Price />
        </div>
      </Carousel>
    </div>
  );
};

export default App;
