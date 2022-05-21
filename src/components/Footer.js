import React from "react";
import "../styles/Footer.css";
import logo from "../assets/white-logo.png";

function Footer(props) {
  return (
    <footer>
      <img src={logo} alt="Logo de Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
