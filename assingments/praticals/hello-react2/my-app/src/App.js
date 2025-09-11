import React from "react";
import FruitList from "./FruitList"; 
import UserList from "./UserList";
import Counter from "./Counter";
import UserList1 from "./UserList";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About";
import Contact from "./Contact";
import Greeting from './Greeting'; 
import Wlecomemessage from "./WelcomeMessage.jsx";
import UserCard from "./UserCard.jsx";

const App = () => {
  // Navigation styles
  const navStyle = {
    padding: "10px",
    backgroundColor: "#f0f0f0",
    marginBottom: "20px"
  };

  const linkStyle = {
    marginRight: "15px",
    textDecoration: "none",
    color: "blue"
  };

  return (
    
    <div>
      {/*<Greeting name="Dhvani" />
      <Greeting name="Rutvik" />*/}
     {/* <Wlecomemessage /> */}
      {/*UserCard name="Dhvani Patel" age={25} location="India" />
      <UserCard name="Rutvik Patel" age={25} location="Canada" /> I*/}
     {*/<Counter /> */}
     

    </div>
  );
};

export default App;