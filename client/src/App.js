import React, { Component } from "react";

import "./styles/App.css";

import ListFilters from "./components/ListFilters";
import MainFilterImg from "./components/MainFilterImg";

const urlImg = `https://images.pexels.com/photos/33066/hummingbird-flying-portrait-wildlife.jpg?h=350&auto=compress`;

class App extends Component {
  state = {
    filterStyle: { name: "", value: "" }
  };

  setFilter = filter => {
    this.setState({ filterStyle: filter });
  };

  render() {
    const { filterStyle } = this.state;
    return (
      <div className="app">
        <ListFilters urlImg={urlImg} onClick={this.setFilter} />
        <MainFilterImg urlImg={urlImg} filterStyle={filterStyle} />
      </div>
    );
  }
}

export default App;
