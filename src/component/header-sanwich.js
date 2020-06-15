import React, { Component } from "react";
import sanwich from './sandwichtitulo.png'; // Tell webpack this JS file uses this image

import "bootstrap/dist/css/bootstrap.min.css";

export default class Header extends Component {
    render() {
        return (
            <div>
                <div id="sanwich" className="wrapper-pig">
                    <center><img src={sanwich} alt="Logo" with="500" height="200" /></center>
                </div>
            </div>
        );
    }
}