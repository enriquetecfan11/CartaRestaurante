import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="name-main">SandWich Mixto</div>
        <div className="price">3.00€</div>
        <div className="description">Pan de Molde, Jamón Cocido, Queso.</div>
        <br></br>
        <br></br>
        <div className="name-main">SandWich Mixto Con Bacon</div>
        <div className="price">8.00€</div>
        <div className="description">Pan de Molde, Jamón York, Queso, Bacon</div>
        <br></br>
        <br></br>
        <div className="name-main">SandWich Vegetal</div>
        <div className="price">4,00€</div>
        <div className="description">Pan de Molde, Lechuga, Tomate, Esparragos Blancos, Huevo Duro</div>
        <br></br>
        <br></br>
        <div className="name-main">Sandwich Mediterraneo</div>
        <div className="price">4,00 €</div>
        <div className="description">Pan de Molde, Lechuga, Huevo Duro, Jamón York, Queso.</div>
        <br></br>
        <br></br>
        <div className="name-main">Sandwich Casa lucre</div>
        <div className="price">4.50€</div>
        <div className="description">Pan de Molde, Lechuga, Huevo Frito, Jamón York, Bacon, Queso.</div>
        
      </div>
    );
  }
}
