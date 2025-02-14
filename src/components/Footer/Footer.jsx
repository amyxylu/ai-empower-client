import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer__logo">AI Empower</h2>
      <div className="footer__team">
        <h3>Develop by:</h3>
        <ul className="footer__team--list">
          <li className="footer__team--member">Alma Nursultan</li>
          <li className="footer__team--member">Amy Lu</li>
          <li className="footer__team--member">Joice Ceron</li>
          <li className="footer__team--member">Mohita Prabhakar</li>
          <li className="footer__team--member">Vijay Mariyil Jayan</li>
        </ul>
        <p className="footer__copy">
          &copy; 2025 Ai Empower. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
