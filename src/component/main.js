import React, { Component } from "react";


import data from "./data/data.json";


const newdata = data.map(data => {
  return (
      <div>
        <div className="name-main">{data.name}</div>
        <div className="price">{data.price}</div>
        <div className="description">{data.desc}</div>
      </div>
  );
});

export default class Main extends Component {
  render() {
    return newdata;
  }
}
