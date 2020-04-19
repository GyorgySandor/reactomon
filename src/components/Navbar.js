import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <header style={navbarStyle}>
        <h1>Reactoman</h1>
        <Link style={linkStyle} to="/pokemons">
          Pokemons
        </Link>{" "}
        |{" "}
        <Link style={linkStyle} to="/types">
          Types
        </Link>
      </header>
    );
  }
}

const navbarStyle = {
  background: "#3B4CCA",
  color: "#FFDE00",
  textAlign: "center",
  padding: "10px",
};

const linkStyle = {
  color: "#FFDE00",
  textDecoration: "none",
};

export default Navbar;
