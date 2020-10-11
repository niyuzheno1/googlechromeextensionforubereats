import React from "react";
import TodoItem from "./TodoItem";
const { Component } = require("react");

export default class Text extends Component {
  complete() {
    console.log("3");
  }
  render() {
    return <TodoItem markcomplete={this.props.markcomplete} />;
  }
}

// Text.prototype = {
//   todos: PropType.array.isRequired
// };
