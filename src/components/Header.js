import React from "react";
import "../styles/Header.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <nav>
        <img src={logo} alt="Logo de Kasa" />
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
        <Link to="/appartment">Appartements</Link>
      </nav>
    </header>
  );
}

export default Header;
