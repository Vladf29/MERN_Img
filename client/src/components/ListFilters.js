import React from "react";
import PropTypes from "prop-types";
import FilterImg from "./FilterImg";
import FilterTitle from "./FilterTitle";

import "../styles/containerFilters.css";

const filterStyles = [
  { name: "blur", value: "5px" },
  { name: "brightness", value: ".5" },
  { name: "contrast", value: ".75" },
  { name: "grayscale", value: ".75" },
  { name: "hue-rotate", value: "180deg" },
  { name: "invert", value: ".75" },
  { name: "saturate", value: "5" },
  { name: "sepia", value: ".8" }
];

const ListFilters = ({ urlImg, onClick }) => {
  return (
    <div className="container-filters">
      {filterStyles.map((item, ind) => (
        <div
          key={item.name}
          className="container-filters-img"
          onClick={() => onClick(item)}
        >
          <FilterImg
            urlImg={urlImg}
            filterStyle={`${item.name}(${item.value})`}
          />
          <FilterTitle
            title={item.name}
            className={"container-filters-title"}
          />
        </div>
      ))}
    </div>
  );
};

ListFilters.propTypes = {
  urlImg: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ListFilters;
