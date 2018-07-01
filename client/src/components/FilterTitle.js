import React from "react";
import PropTypes from "prop-types";

const FilterTitle = ({ title, className }) => {
  return <div className={className}>{title}</div>;
};

FilterTitle.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default FilterTitle;
