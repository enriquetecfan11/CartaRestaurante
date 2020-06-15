import React, { Component } from "react";
import tosta from "./tosta.png"

import "bootstrap/dist/css/bootstrap.min.css";

export default class Header extends Component {
    render() {
        return (
            <div>
                <div id="tosta" className="wrapper-pig">
                    <center><img className="salad-image" src={tosta} alt="Logo" with="500" height="200" /></center>
                    <div className="pig-text">
                        <span>Tostas</span>
                    </div>
                </div>
            </div>
        );
    }
}