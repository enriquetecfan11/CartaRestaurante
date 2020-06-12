import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import salad from './salad.png';
import perrito from './hotdog.png'; // Tell webpack this JS file uses this image
import sanwich from './sandwich.png'; // Tell webpack this JS file uses this image
import hamburgesa from './hamburguesa.png';
import bocata from "./bocata.png"; // Tell webpack this JS file uses this image



export default class Header extends Component {
  render() {
    return (
      <div>
        <button>
        <a href="#ensaladas">
          <img src={salad} alt="Logo" with="50" height="50"  />
        </a>
        </button>
        <button>
        <a href="#hotdog">
          <img src={perrito} alt="Logo" with="50" height="50"  />
        </a>
        </button>
        <button>
        <a href="#sanwich">
          <img src={sanwich} alt="Logo" with="50" height="50"  />
        </a>
        </button>
        <button>
        <a href="#hamburgesas">
          <img src={hamburgesa} alt="Logo" with="50" height="50"  />
        </a>
        </button>
        <button>
        <a href="#bocata">
          <img src={bocata} alt="Logo" with="50" height="50"  />
        </a>
        </button>
      </div>
    );
  }
}
