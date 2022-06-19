import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="logo">
        <img src="logo.jpg" alt="logo" />
      </div>
      <div className="logo__nav">
        <Link to="/">ACCUEIL</Link>
        <ul>
          <p> PORTEFOLIO</p>
          <Link to="/hotels">
            <li>Hôtellerie restauration </li>
          </Link>
          <Link to="/automobile">
            <li>Automobile </li>
          </Link>
        </ul>
        <Link to="/contact">CONTACT</Link>
      </div>

      <div className="logo__nav__home">
        <img src="imgHome.jpg" alt="imgHome" />
      </div>
    </>
  );
};

export default Home;
