import React, { Fragment, Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Footer extends Component {
    render() {
        return (
            <Fragment>
                <nav class="navbar navbar-default" role="navigation">
                    <div class="navbar-header">
                        <a class="navbar-brand">2020 &copy; Enrique Rodriguez Vela</a>
                    </div>
                </nav>
            </Fragment>
        );
    }
}
