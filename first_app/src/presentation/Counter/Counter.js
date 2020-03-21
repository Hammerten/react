import React from "react";
import Message from "../Message/Message";
import CounterHook from "../CounterHook/CounterHook";

export default class Counter extends React.Component {
  state = {
    value: 0
  };

  countIncrease = e => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1
      };
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <h2>Counter Class Component</h2>
        <button onClick={this.countIncrease}>Increase Count</button>
        <hr />
        <Message text={`Counter state - ${value}`} />
      </div>
    );
  }
}
