import React from "react";
import "./Login.css";
import {Link} from "react-router-dom"


const Login = () => {
  return (
    <>
      <div className="bg">
        <div className="loginCard">
          <div className="text"> 
          <div className="heading">
            <h1> Lets keep in touch </h1>
            <p>
              We have created a new product that will help designers, developers
              and companies create websites for their startups quickly and
              easily.
            </p>
            </div>  
            <div className="contectInfo">   
            <p>phone number 9100480679</p>
            <p>sandeeprandi123@gmail.com</p>
            <p> adress is 3-48/65 thimmapur , nizamabad, hyderbad,india</p>
             </div>
          </div>
          <form className="loginCards">  
       
            <label htmlFor="name" >  name </label> <br/>
            <input name="name" id="name" placeholder="enter your name" />   <br/>

            <label  htmlFor="budjet" >Budjet</label> <br/>
            <select id="budjet" >  <option value="250$" > 250$</option>  
            <option value="250$" > 250$</option> 
            <option value="350$" > 350$</option> 
            <option value="550$" > 550$</option>  </select>   <br/>

            <label htmlFor="email" >  Email</label> <br/>
            <input type="email" name="email" id="email" placeholder="example@gmail.com" />   <br/>
            
            <label htmlFor="messeege" > your messege</label> <br/>
            <textarea type="text" name="messe4ge" id="nmessege" placeholder="enter your messege" />   <br/>
           <input type="checkbox" /> 
           <p>send me copy</p> 
           <button style={{backgroundColor:"green" ,borderRadius:"5px", height:"30px"}}>send</button> 
           <button style={{backgroundColor:"white" ,borderRadius:"5px" ,height:"30px"}} ><Link to="/" >Home page </Link>  </button>

             </form>
        </div>
      </div>
    </>
  );
};

export default Login;
