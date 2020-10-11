import React from "react";
const { Component } = require("react");

export default class Shoppingitem extends Component {
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
          src={this.props.ipic}
        />
        <p>
          {this.props.itemname} ${this.props.itemvalue}
          <button onClick={this.props.atcart}> Add to cart</button>
        </p>
        <p>
          <button onClick={this.props.previtem}>&lt;</button>{" "}
          <button onClick={this.props.nextitem}>&gt;</button>{" "}
          <button onClick={this.props.checkout}>Checkout</button>
          <button onClick={this.props.back}>Back</button>
          Cart Value: ${this.props.totalvalue}
        </p>
        <p>
          Search Within the store: <input />
        </p>
      </div>
    );
  }
}
