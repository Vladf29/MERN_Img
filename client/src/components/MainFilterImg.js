import React from "react";
import PropTypes from "prop-types";
import FilterImg from "./FilterImg";
import FilterTitle from "./FilterTitle";

import '../styles/mainImg.css'

const MainFilterImg = ({ urlImg, filterStyle }) => {
  let name, value;
  if (filterStyle) {
    name = filterStyle.name;
    value = filterStyle.value;
  }
  return (
    <div className="main-img">
      <div className="main-img__container">
        <FilterImg urlImg={urlImg} filterStyle={`${name}(${value})`} />
        {name && <FilterTitle title={name} className="main-img__title" />}
        {value && <div className="main-img__value">{value}</div>}
      </div>
    </div>
  );
};

MainFilterImg.propTypes = {
  filterStyle: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }).isRequired,
  urlImg: PropTypes.string.isRequired
};

export default MainFilterImg;
