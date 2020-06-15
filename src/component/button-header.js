import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import salad from './salad.png';
import perrito from './hotdog.png'; // Tell webpack this JS file uses this image
import sanwich from './sandwich.png'; // Tell webpack this JS file uses this image
import hamburgesa from './hamburguesa.png';
import bocata from "./bocata.png"; // Tell webpack this JS file uses this image
import tosta from "./tosta.png"



export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="buttons1">

          <button>
            <a href="#ensaladas">
              <img src={salad} alt="Logo" with="50" height="50" />
            </a>
          </button>

          <button>
            <a href="#hotdog">
              <img src={perrito} alt="Logo" with="50" height="50" />
            </a>
          </button>

          <button>
            <a href="#sanwich">
              <img src={sanwich} alt="Logo" with="50" height="50" />
            </a>
          </button>

        </div>

        <div className="buttons2">

          <button>
            <a href="#hamburgesas">
              <img src={hamburgesa} alt="Logo" with="50" height="50" />
            </a>

          </button>
          <button>
            <a href="#bocata">
              <img src={bocata} alt="Logo" with="50" height="50" />
            </a>

          </button>
          <button>
            <a href="#tosta">
              <img src={tosta} alt="Logo" with="50" height="50" />
            </a>
          </button>

        </div>
      </div>
    );
  }
}
