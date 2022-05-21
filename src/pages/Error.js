import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import "../styles/Error.css";

function Error(props) {
  return (
    <>
      <Header />
      <section className="error-page">
        <p className="error-404">404</p>
        <p className="error-text">
          Oups ! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className="error-link">
          Retournez à la page d'accueil
        </Link>
      </section>
    </>
  );
}

export default Error;
