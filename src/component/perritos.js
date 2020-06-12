import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="name-main">Patatas Fritas</div>
        <div className="price">4.00€</div>
        <div className="description">Con Salsa Burger</div>
        <br></br>
        <br></br>
        <div className="name-main">Perrito Caliente Classic</div>
        <div className="price">3.00€</div>
        <div className="description">Con Patatas</div>
        <br></br>
        <br></br>
        <div className="name-main">Perrito Caliente Lux</div>
        <div className="price">3,50€</div>
        <div className="description">Con Patatas</div>
        <br></br>
        <br></br>
        <div className="name-main">Ensalada de Pimientos</div>
        <div className="price">8.00€</div>
        <div className="description">Pimiento rojo frito, Atún, Anchoas, Huevo cocido</div>
        <br></br>
        <br></br>
        <div className="name-main">Ensaladilla Rusa</div>
        <div className="price">4.50€</div>
        <div className="description">Casera</div>
        
      </div>
    );
  }
}
