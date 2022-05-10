import React from "react";
import ReactDOM from "react-dom";

var interval;
class RevCountdown extends React.Component {
  constructor() {
    super();
    this.state = {
      second: 10,
      minute: 0,
      hour: 0,
    };
  }
  // componentDidMount() {
  //     interval = setInterval(() => {
  //       this.setState({
  //         second: this.state.second - 1,
  //       });
  //     }, 1000);
  // }
  startTimer = () => {
    interval = setInterval(() => {
      this.setState({
        second: this.state.second - 1,
      });
    }, 1000);
  };
  stopTimer = () => {
    clearInterval(interval);
  };
  componentDidMount() {
    this.startTimer();
  }
  componentDidUpdate() {
    if (this.state.second == 0) {
      this.stopTimer();
    }
  }
  resetTimer = () => {};
  render() {
    return (
      <>
        <div className="timer">
          <h2>
            countdown = {this.state.hour} : {this.state.minute} : {this.state.second}
          </h2>
        </div>
        <div className="buttonElement">
          <button
            className="btn"
            onClick={this.props.setNewTitle}
            type="button"
          >
            change title
          </button>
          <button className="btn" onClick={this.startTimer} type="button">
            start timer
          </button>
          <button className="btn" onClick={this.stopTimer} type="button">
            stop timer
          </button>
        </div>
      </>
    );
  }
}
export default RevCountdown;