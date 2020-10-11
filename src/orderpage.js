import React from "react";
const { Component } = require("react");

export default class Orderpage extends Component {
  markcomplete() {
    console.log("okay");
  }
  generatetable() {
    return this.props.shoplist.items.map((it, id) => {
      return (
        <tr>
          <td>{id}</td>
          <td>{it.name}</td>
          <td>{it.price}</td>
        </tr>
      );
    });
  }
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <table>
            <thead>
              <tr>
                <th>Item ID</th>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>{this.generatetable()}</tbody>
          </table>
        </div>
        <p></p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <table>
            <thead>
              <tr>
                <th>Details</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>{this.props.shoplist.Subtotal}</td>
              </tr>
              <tr>
                <td>Service Fee</td>
                <td>{this.props.shoplist.ServiceFee}</td>
              </tr>
              <tr>
                <td>Delivery Fee</td>
                <td>{this.props.shoplist.DeliveryFee}</td>
              </tr>
              <tr>
                <td>Small Order Fee</td>
                <td>{this.props.shoplist.SmallOrderFee}</td>
              </tr>

              <tr>
                <td>Taxes Fee</td>
                <td>{this.props.shoplist.Taxes}</td>
              </tr>

              <tr>
                <td>Total</td>
                <td>{this.props.shoplist.Total}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={this.props.callorder}> Order </button>
          <button onClick={this.props.back}> Back </button>
        </div>
      </div>
    );
  }
}
