import React from "react";
import "./SlideOne.css";
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div className="Home">
      <div style={{ width: "550px" }}>
        <h1>Easy to setup.
Easy to maintain</h1>
        <p>
        Bootstrap is a widely-used, sleek, intuitive and powerful front-end framework for faster and easier web development.
        </p> 

        <button className="button" > <Link to="Login">get started </Link>  </button>
      </div>
     
    </div>
  );
};

export default Home;
