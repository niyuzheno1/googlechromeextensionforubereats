import React from "react";
const { Component } = require("react");

export default class Restaurant extends Component {
  markcomplete() {
    console.log("okay");
  }
  render() {
    return (
      <div>
        <img
          style={{
            width: 100,
            height: 100
          }}
          alt="restaurant"
          src={this.props.rpic}
        />{" "}
        <p> Restaurant Name : {this.props.rname}</p>
        <p> Average Price : {this.props.avgprice}</p>
        <p> Food Style : {this.props.fstyle}</p>
        <p>
          <button onClick={this.props.urest}>&lt;</button>{" "}
          <button onClick={this.props.drest}>&gt;</button>{" "}
          <button onClick={this.props.choose}>Choose</button>
        </p>
        <p>
          Search for a store: <input />
        </p>
      </div>
    );
  }
}
