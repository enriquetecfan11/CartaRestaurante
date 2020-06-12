import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="name-main">Bocata de Calamares</div>
        <div className="price">5.50€</div>
        <div className="description">Fritos</div>
        <br></br>
        <br></br>
        <div className="name-main">Bocata de Atun</div>
        <div className="price">5.50€</div>
        <div className="description">Anchoas</div>
        <br></br>
        <br></br>
        <div className="name-main">Bocata de Queso</div>
        <div className="price">5,00€</div>
        <div className="description">Manchego Semi Curado.</div>
        <br></br>
        <br></br>
        <div className="name-main">Bocata de Jamón</div>
        <div className="price">8.00€</div>
        <div className="description">Jamón Serrano</div>
        <br></br>
        <br></br>
        <div className="name-main">Bocata de Chorizo</div>
        <div className="price">4.50€</div>
        <div className="description">Casero Frito</div>
        <br></br>
        <br></br>
        <div className="name-main">Bocata de Lomo de Cerdo</div>
        <div className="price">4.50€</div>
        <div className="description">Con Queso</div>
        <br></br>
        <br></br>
        <div className="name-main">Bocata de Pepito</div>
        <div className="price">4.50€</div>
        <div className="description">De Ternera</div>
        
      </div>
    );
  }
}
