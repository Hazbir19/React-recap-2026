import React, { Component } from "react";

class ChildMounting extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "Farhadul Hasan" };
    console.log("Child-Constructor Mounting");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Child-getDerivedStateFromProps Mounting");
    return null;
  }
  componentDidMount() {
    console.log("Child-componentDidMount Mounting");
  }
  render() {
    console.log("Child-render Mounting");
    return <div>ChildMounting</div>;
  }
}
export default ChildMounting;
