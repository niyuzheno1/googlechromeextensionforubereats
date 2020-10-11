import React from "react";
const { Component } = require("react");

export default class TodoItem extends Component {
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
          alt="hello"
          src="https://d1ralsognjng37.cloudfront.net/cd8d46e3-a1b8-4cc8-ad4e-32f3e3823a84.jpeg"
        />
        <p> Restaurant Name </p>
        <p> Average Price </p>
        <p> Food Style : Mexican</p>
        <p>
          <button onClick={this.props.markcomplete}>&lt;</button>{" "}
          <button>&gt;</button> <button>Choose</button>
        </p>
        <p>
          Search for a store: <input />
        </p>
      </div>
    );
  }
}
