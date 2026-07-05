import React, { Component } from "react";
class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "userName",
      Comments: "Comments",
      Topics: "Topics",
    };
  }
  handleUserName = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };
  handleComments = (event) => {
    this.setState({
      Comments: event.target.value,
    });
  };
  handleTopics = (event) => {
    this.setState({
      Topics: event.target.value,
    });
  };
  handleSubmit = (event) => {
    console.log(`${this.state.userName}`);
    alert(`${this.state.userName}`);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>userName:</label>
          <input
            type="text"
            value={this.state.userName}
            onChange={this.handleUserName}
          />
        </div>
        <div>
          <label>Comments:</label>
          <textarea
            type="text"
            value={this.state.Comments}
            onChange={this.handleComments}
          />
        </div>
        <div>
          <label>Topics</label>
          <select>
            <option value="">React</option>
            <option value="">Angular</option>
            <option value="">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default Form;
