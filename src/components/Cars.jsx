import React from "react";
import { Link } from "react-router-dom";
import carsPictures from "../data/carsPictures";
import Car from "./Car";

const Cars = () => {
  return (
    <>
      <div className="logo">
        <img src="logo.jpg" alt="logo" />
      </div>
      <div className="logo__nav">
        <Link to="/">ACCUEIL</Link>{" "}
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
      <div className="title">
        <h1>Automobiles</h1>
      </div>
      <div className="title__mapCars">
        {carsPictures &&
          carsPictures.map((car, index) => <Car key={index} {...car} />)}
      </div>
    </>
  );
};

export default Cars;
