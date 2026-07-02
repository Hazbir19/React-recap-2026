import React, { Component } from "react";
export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  Increment() {
    // Work with Current State
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("Callback value", this.state.count);
    //   },
    // );
    // console.log(this.state.count);
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    console.log(this.state.count);
  }
  render() {
    return (
      <div className="counterDiv">
        <h1>Counter - {this.state.count} </h1>
        <button type="button" onClick={() => this.Increment()}>
          Increment
        </button>
      </div>
    );
  }
}
