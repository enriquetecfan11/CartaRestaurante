import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="name-main">Tosta de Salmón Ahumado</div>
        <div className="price">5.50€</div>
        <div className="description">Gulas y Queso fidalefia cremoso</div>
        <br></br>
        <br></br>
        <div className="name-main">Tosta de Anchoas</div>
        <div className="price">5.50€</div>
        <div className="description">Gulas Tomate Lechuga y Ajo</div>
        <br></br>
        <br></br>
        <div className="name-main">Tosta de Atún</div>
        <div className="price">5,00€</div>
        <div className="description">Con Pimientos Asados.</div>
        <br></br>
        <br></br>
        <div className="name-main">Tosta de Solomillo de Cerdo</div>
        <div className="price">6.50€</div>
        <div className="description">Queso de Cabar y Cebolla Caramalizada</div>
        <br></br>
        <br></br>
        <div className="name-main">Tosta de Anchoas</div>
        <div className="price">5,50 €</div>
        <div className="description">con Pimientos Asados y Boquerones</div>
        <br></br>
        <br></br>
        <div className="name-main">Tosta de Pisto Casero</div>
        <div className="price">5,00 €</div>
        <div className="description">Con Huevo Frito</div>
        <br></br>
        <br></br>
        <div className="name-main">Tosta de Jamon Ibérico</div>
        <div className="price">6,50 €</div>
        <div className="description">Con Tomate Natural</div>
        
      </div>
    );
  }
}
