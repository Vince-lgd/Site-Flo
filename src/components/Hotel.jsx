import React from "react";
import Proptypes from "prop-types";

const Hotel = ({ image }) => {
  return (
    <div className="restoPicture">
      <img src={image} alt="restoPicture" />
    </div>
  );
};

Hotel.propTypes = {
  image: Proptypes.string.isRequired,
};
export default Hotel;
