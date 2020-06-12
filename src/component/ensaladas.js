import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="name-main">Ensalada de Tomate</div>
        <div className="price">5.50€</div>
        <div className="description">Aceite de Oliva y Ajo</div>
        <br></br>
        <br></br>
        <div className="name-main">Ensalada de Gulas</div>
        <div className="price">8.00€</div>
        <div className="description">Gulas Tomate Lechuga y Ajo</div>
        <br></br>
        <br></br>
        <div className="name-main">Ensalada Casa Lucre</div>
        <div className="price">8,00€</div>
        <div className="description">Lechuga, Tomate, Atún, Cebolla, Maíz, Espárragos, Huevo cocido.</div>
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
