import React from "react";

import CustomCarousel from "./CustomCarousel"; // Adjust the path as needed
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Login from "./Components/LoginPage/Login.js"



const App = () => {
  return ( 
    <Router >  
      <Routes>

        <Route  path="/" element={  <CustomCarousel />} />
        <Route  path="Login" element={<Login />} />
      </Routes>
      
      
      
       </Router>
   
    
    
    
  );
};

export default App;
