import React, { Component } from "react";


import data from "./data/data.json";


const newdata = data.map(data => {
  return (
    <table id="tablePreview" class="table table-sm table-borderless">
      <tbody>
        <tr>
          <td className="nombre">{data.name}</td>
          <td className="price">{data.price}</td>
        </tr>
        <tr>
          <td className="descripcion">{data.desc}</td>
          <td className="descripcion"></td>
          
        </tr>
        <tr>
        </tr>
      </tbody>
    </table>

  );
});

export default class Main extends Component {
  render() {
    return newdata;
  }
}
