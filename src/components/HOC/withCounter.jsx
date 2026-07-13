import React, { Component } from "react";
const withCounter = (Counter) => {
  class CounterHOC extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
    Increment = () => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
      //   console.log(this.state.count);
    };
    render() {
      return (
        <Counter
          Increment={this.Increment}
          count={this.state.count}
          {...this.props}
        />
      );
    }
  }
  return CounterHOC;
};
export default withCounter;
