import React, { Component } from "react";
import withCounter from "./HOC/withCounter";

class HoverCounter extends Component {
  render() {
    const { count, Increment, name } = this.props;
    return (
      <button onMouseOver={Increment}>
        {name} Hover {count} Times
      </button>
    );
  }
}

export default withCounter(HoverCounter);
