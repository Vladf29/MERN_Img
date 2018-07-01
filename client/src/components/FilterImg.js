import React from "react";
import PropTypes from "prop-types";

const FilterImg = ({ urlImg, filterStyle }) => {
  return <img src={urlImg} style={{ filter: `${filterStyle}` }} />;
};

FilterImg.propTypes = {
  urlImg: PropTypes.string.isRequired
};

export default FilterImg;
