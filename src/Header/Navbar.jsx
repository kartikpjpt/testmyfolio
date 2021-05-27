import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="container__navbar">
        <div className="my-name">
          <h2>Kartik Prajapat</h2>
        </div>
        <div className="nav-items">
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">About Me</a>
          <a href="#">Contact</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
