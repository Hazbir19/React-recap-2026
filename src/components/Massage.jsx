import React, { Component } from "react";

export default class Massage extends Component {
  constructor() {
    super();
    this.state = {
      massage: "Welcome visitor",
    };
  }
  ChangeMassage() {
    this.setState({
      massage: "Thank You for Subscribing",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.massage}</h1>
        <button
          type="button"
          className="button"
          onClick={() => this.ChangeMassage()}
        >
          Subscribe
        </button>
      </div>
    );
  }
}
