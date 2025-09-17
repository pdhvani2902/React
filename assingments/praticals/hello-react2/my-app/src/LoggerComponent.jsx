import React, { Component } from "react";

class LoggerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  // Trigger re-render by updating state
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Logs when component updates
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("🔄 Component updated! New count:", this.state.count);
    }
  }

  // Logs when component unmounts
  componentWillUnmount() {
    console.log("❌ Component will unmount (removed from DOM).");
  }

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>Logger Component</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default LoggerComponent;
