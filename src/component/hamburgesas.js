import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="name-main">Hamburguesa Champion</div>
        <div className="price">8,00 €</div>
        <div className="description">Pan de Hamburguesa, Lechuga, Tomate, Cebolla, Carne Picada Angus, Beicon, Queso de Cabra, Cebolla Caramelizada, Patatas Fritas</div>
        
        <div className="name-main">Hamburguesa Casa Lucre</div>
        <div className="price">5,00 €</div>
        <div className="description">Pan de Hamburguesa, Lechuga, Tomate, Cebolla, Carne Picada, Jamón, York, Beicon, Queso, Huevo Frito, Patatas Fritas.</div>
        
        <div className="name-main">Hamburguesa Especial</div>
        <div className="price">4,50 €</div>
        <div className="description">Pan de Hamburguesa, Lechuga, Tomate, Cebolla, Carne Picada, Jamón York, Beicon, Queso, Patatas Fritas.</div>
        
        <div className="name-main">Hamburguesa Celiacos</div>
        <div className="price">4,00 €</div>
        <div className="description">Pan de Hamburguesa, Lechuga, Tomate, Cebolla, Carne, Ensalada</div>

        <div className="name-main">Hamburgesa Classic</div>
        <div className="price">3,50 €</div>
        <div className="description">Pan de Hamburguesa, Lechuga, Tomate, Cebolla, Carne Picada, Patatas Fritas</div>
      </div>
    );
  }
}
