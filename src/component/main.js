import React, { Component } from "react";


import data from "./data/data.json";


const newdata = data.map(data => {
  return (
    <nav>
      <nav>
        <div className="name">{data.name}</div>
        <div className="price">{data.price}</div>
        <div className="description">{data.desc}</div>
      </nav>
    </nav>
  );
});

export default class Main extends Component {
  render() {
    return newdata;
  }
}
