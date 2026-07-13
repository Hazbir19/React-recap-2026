import React, { Component } from "react";
import withCounter from "./HOC/withCounter";
class Counter extends Component {
  render() {
    const { count, Increment, name } = this.props;
    return (
      <div className="counterDiv">
        <h1>
          {name} Counter - {count}
        </h1>
        <button type="button" onClick={() => Increment()}>
          Increment
        </button>
      </div>
    );
  }
}
export default withCounter(Counter);
