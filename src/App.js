import React from "react";
import "./styles.css";
import { Component } from "react";
import data from "./data";
import { cptotal, orderonline } from "./data";
import Restaurant from "./restaurant2";
import { Router, Route, browserHistory, useHistory } from "react-router-dom";
import history from "./history";
import Shoppingitem from "./shoppingitem";
import Orderpage from "./orderpage";

export default class App extends Component {
  state = (function () {
    var tmp = data();
    var shoppingcart = {
      items: [],
      Subtotal: 0,
      ServiceFee: 0,
      DeliveryFee: 0,
      SmallOrderFee: 0,
      Taxes: 0,
      Total: 0
    };
    return {
      restaurant: tmp.rest,
      items: tmp.items,
      shoppingitem: shoppingcart,
      crid: 0,
      ciid: 0
    };
  })();
  previousrestaurant() {
    var current = {
      restaurant: this.state.restaurant,
      items: this.state.items,
      shoppingitem: this.state.shoppingitem,
      crid: this.state.crid - 1,
      ciid: this.state.ciid
    };
    if (current.crid < 0) current.crid = this.state.restaurant.length - 1;

    this.setState(current);
  }
  nextrestaurant() {
    var current = {
      restaurant: this.state.restaurant,
      items: this.state.items,
      shoppingitem: this.state.shoppingitem,
      crid: this.state.crid + 1,
      ciid: this.state.ciid
    };
    if (current.crid >= this.state.restaurant.length) current.crid = 0;

    this.setState(current);
  }
  chooserestaurant() {
    var current = {
      restaurant: this.state.restaurant,
      items: this.state.items,
      shoppingitem: this.state.shoppingitem,
      crid: this.state.crid,
      ciid: this.state.restaurant[this.state.crid].itemlist[0]
    };
    this.setState(current);
    history.push("/buyfood");
  }
  previtem() {
    var current = {
      restaurant: this.state.restaurant,
      items: this.state.items,
      shoppingitem: this.state.shoppingitem,
      crid: this.state.crid,
      ciid: this.state.ciid - 1
    };
    if (current.ciid < 0) current.ciid = this.state.items.length - 1;

    this.setState(current);
  }
  nextitem() {
    var current = {
      restaurant: this.state.restaurant,
      items: this.state.items,
      shoppingitem: this.state.shoppingitem,
      crid: this.state.crid,
      ciid: this.state.ciid + 1
    };
    if (current.ciid >= this.state.items.length) current.crid = 0;

    this.setState(current);
  }
  back() {
    history.push("/");
  }
  odfood() {
    orderonline(this.state.shoppingitem);
  }
  computetotal(x) {
    return cptotal(x);
  }
  addtocart() {
    var current = {
      restaurant: this.state.restaurant,
      items: this.state.items,
      shoppingitem: this.state.shoppingitem,
      crid: this.state.crid,
      ciid: this.state.ciid
    };
    current.shoppingitem.items.push(this.state.items[this.state.ciid]);
    current.shoppingitem = this.computetotal(current.shoppingitem);
    this.setState(current);
  }
  checkout() {
    history.push("/checkout");
  }
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <Restaurant
                  rpic={this.state.restaurant[this.state.crid].pic}
                  rname={this.state.restaurant[this.state.crid].name}
                  avgprice={
                    "$" + this.state.restaurant[this.state.crid].avgprice
                  }
                  fstyle={this.state.restaurant[this.state.crid].foodstyle}
                  urest={this.previousrestaurant.bind(this)}
                  drest={this.nextrestaurant.bind(this)}
                  choose={this.chooserestaurant.bind(this)}
                />
              </React.Fragment>
            )}
          />
          <Route
            path="/buyfood"
            render={(props) => (
              <React.Fragment>
                <Shoppingitem
                  ipic={this.state.items[this.state.ciid].picture}
                  itemname={this.state.items[this.state.ciid].name}
                  itemvalue={this.state.items[this.state.ciid].price}
                  previtem={this.previtem.bind(this)}
                  nextitem={this.nextitem.bind(this)}
                  back={this.back.bind(this)}
                  totalvalue={this.state.shoppingitem.Total}
                  atcart={this.addtocart.bind(this)}
                  checkout={this.checkout.bind(this)}
                />
              </React.Fragment>
            )}
          />
          <Route
            path="/checkout"
            render={(props) => (
              <React.Fragment>
                <Orderpage
                  shoplist={this.state.shoppingitem}
                  callorder={this.odfood.bind(this)}
                  back={this.back.bind(this)}
                ></Orderpage>
              </React.Fragment>
            )}
          />
        </div>
      </Router>
    );
  }
}
