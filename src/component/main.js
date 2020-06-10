import React, { Component } from "react";


import data from "./data/data.json";


const newdata = data.map(data => {
  return (
    <table class="blueTable">
      <tbody>
        <tr>
          <td>{data.name}</td>
          <td>{data.desc}</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
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
