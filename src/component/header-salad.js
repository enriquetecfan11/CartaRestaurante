import React, { Component } from "react";
import salad from './salad.png'; // Tell webpack this JS file uses this image
import tituloensalada from "./ensaladastitulo.png"


import "bootstrap/dist/css/bootstrap.min.css";

export default class Header extends Component {
    render() {
        return (
            <div id="ensaladas">
                    <center><img src={tituloensalada} alt="Logo" with="500" height="200" /></center>
                </div>
        );
    }
}
