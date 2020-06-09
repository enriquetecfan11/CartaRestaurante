import React, { Component } from "react";

import data from "./data/data.json";


const newdata = data.map(data => {
  return (
    <body>
        <div className="item col-md-9">
          <p className="name">{data.name}</p>
          </div>
          <div className="item col-md-9">
          <p className="description">{data.desc}</p>
          </div>       
        <div className="price col-md-3">
          <p className="price">{data.price}</p>
        </div>
        <br></br>
    </body>

  );
});

export default class Main extends Component {
  render() {
    return newdata;
  }
}
