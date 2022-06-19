import React from "react";
import Proptypes from "prop-types";

const Car = ({ image }) => {
  return (
    <div className="carPicture">
      <img src={image} alt="pictureCar" />
    </div>
  );
};
Car.propTypes = {
  image: Proptypes.string.isRequired,
};

export default Car;
