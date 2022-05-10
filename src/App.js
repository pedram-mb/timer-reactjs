import React from "react";
import ReactDOM from "react-dom";
import FirstHeader from "./Firstheader";
// import StopWatch from "./stopwatch";
import Timer from "./Timer";
import RevCountdown from "./revTimer";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "this is countdown with react.js",
    };
  }
  setNewTitle = () => {
    this.setState({
      title: "props for function",
    });
  };
  render() {
    return (
      <div className="main">
        <FirstHeader title={this.state.title} />
        <Timer />
        <swProject/>
      </div>
    );
  }
}

export default App;
