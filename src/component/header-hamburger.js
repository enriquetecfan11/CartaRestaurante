import React, { Component } from "react";
import hamburgesa from './hamburguesa.png';
import titulohamburgesa from "./hamburgesatitulo.png"

import "bootstrap/dist/css/bootstrap.min.css";

export default class Header extends Component {
    render() {
        return (
            <div>
                <div id="hamburgesas" className="wrapper-pig">
                    <center><img src={titulohamburgesa} alt="Logo" with="500" height="200" /></center>
                </div>
            </div>
        );
    }
}