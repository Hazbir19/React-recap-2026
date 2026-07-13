import React, { Component } from "react";
import ChildMounting from "./Childmounting";

class Mounting extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "Farhadul Hasan" };
    console.log("Constructor Mounting");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps Mounting");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount Mounting");
  }
  render() {
    console.log("render Mounting");

    return (
      <div>
        <div>Perent Component</div>
        <ChildMounting />
      </div>
    );
  }
}
export default Mounting;
