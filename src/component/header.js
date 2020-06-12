import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import logo from "./restaurante.jpg";

export default class Header extends Component {
  render() {
    return (
      <div className="specials">
        <img src={logo} alt="Logo" with="500" height="200" />
        <h1>Tu Restaurante</h1>
        <h3>Plaza Mayor, Mondejar 19110 (Guadalajara)</h3>
        <h3> tel. xxx xxx xxx email: xxx@mail.com</h3>
        <br></br>
      </div>
    );
  }
}
