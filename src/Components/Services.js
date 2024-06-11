import React from "react";
import "./SlideOne.css";

const Home = () => {
  return (
    <div className="Home">
      <div style={{ width: "550px" }}>
        <h1>We Create Something New</h1>
        <p>
          We have created a new product that will help designers, developers and
          companies create websites for their startups quickly and easily.
        </p>
      </div>
      <div className="aboutpages">
        {" "}
       <div>
          {" "}
          <strong>30 New feature pages</strong>{" "}
          <p> 
            Startup Framework contains components and complex blocks which can
            easily.
          </p>{" "}
        </div>{" "}
        <div>
          {" "}
          <strong>Useful Symbol Components</strong>{" "}
          <p> 
          Samples will show you the feeling on how to play around using the components.
          </p>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default Home;
