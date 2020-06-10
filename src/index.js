import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./component/header";
import Main from "./component/main";
import Footer from "./component/footer";
import logo from './restaurante.svg'; // Tell webpack this JS file uses this image

import "./styles.css";

class Place extends Component {
  render() {
    return (
      <Fragment>
        <div className="logoCont">
        <img src={logo} alt="Logo" width="150" height="150" />;
          <div className="logo">
          </div>
        </div>
        <Header />
        <br></br>
            <Main />
             <Footer/>    
            </Fragment>
    );
  }
}

ReactDOM.render(<Place />, document.getElementById("root"));
