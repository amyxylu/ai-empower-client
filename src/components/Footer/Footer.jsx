import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <h2>Ai Empower</h2>
      <div className="footer__team">
        <h3>Develop by:</h3>
        <ul>
          <li>Alma Nursultan</li> 
          <li>Amy Lu</li>
          <li>Joice Ceron</li>
          <li>Mohita Prabhakar</li>
          <li>Vijay Mariyil Jayan</li>
        </ul>
      </div>
      <p className="footer__text">
        {" "}
        &copy; 2025 Ai Empower. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
