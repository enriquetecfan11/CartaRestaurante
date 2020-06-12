import React, { Component } from "react";
import salad from './salad.png'; // Tell webpack this JS file uses this image

import "bootstrap/dist/css/bootstrap.min.css";

export default class Header extends Component {
    render() {
        return (
            <div id="ensaladas">
                <div className="wrapper-pig">
                    <center><img className="salad-image" src={salad} alt="Logo" with="500" height="200" /></center>
                    <div className="pig-text">
                        <span>ensaladas</span>
                    </div>
                </div>
            </div>
        );
    }
}
