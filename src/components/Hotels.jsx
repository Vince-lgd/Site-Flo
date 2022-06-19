import React from "react";
import { Link } from "react-router-dom";
import Hotel from "./Hotel";
import hotelPictures from "../data/hotelPictures";

const Hotels = () => {
  return (
    <>
      <div className="logo">
        <img src="logo.jpg" alt="logo" />
      </div>
      <div className="logo__nav">
        <Link to="/">ACCUEIL</Link>
        <ul>
          <p>PORTEFOLIO</p>
          <Link to="/hôtellerie restauration">
            <li>Hôtellerie restauration </li>
          </Link>
          <Link to="/automobile">
            <li>Automobile </li>
          </Link>
        </ul>
        <Link to="/contact">CONTACT</Link>
      </div>
      <div className="title">
        <h1>Hôtellerie restauration</h1>
      </div>
      <div className="title__map">
        {hotelPictures &&
          hotelPictures.map((hotel, index) => <Hotel key={index} {...hotel} />)}
      </div>
    </>
  );
};

export default Hotels;
