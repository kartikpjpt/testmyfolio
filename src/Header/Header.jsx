import React from "react";
import "./header.css";
import Navbar from './Navbar.jsx';
import Myinfo from './Myinfo.jsx';

const Header = () => {
  return (
    <>
      <div className="container">
        <Navbar/>
        <Myinfo/>
      </div>
    </>
  );
};

export default Header;
