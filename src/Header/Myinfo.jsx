import React from "react";
import "./Myinfo.css";
import avatar from "./avatar.jpg";

const Myinfo = () => {
  return (
    <>
      <div className="info-container">
        <div className="info-container__image">
          <img src={avatar} alt="kartik-prajapat" className="avatar" />

          <div className="sub-info">
            <h2 className="avatar-heading">Kartik Prajapat</h2>
            <h2 className="avatar-sub">ECC Grad Student</h2>
            <h2 className="avatar-clg">
              <a href="https://mbm.ac.in/">
                <span>MBM Engineering College</span>
              </a>
            </h2>
          </div>
        </div>

        <div className="info-container__info">
          <div className="info-box">
            <span className="top">i write code</span>
            <span className="underscore">_</span>
          </div>
        </div>
        <div className="skill-icons">
              
          </div>
      </div>
    </>
  );
};

export default Myinfo;
