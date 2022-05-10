import React from "react";
import ReactDOM from "react-dom";

// class Timer extends React.Component {
//     constructor(){
//       super()
//       this.state = {
//         time : new Date().toLocaleTimeString()
//       }
//     }
//     render() {
//       setInterval(()=>{
//         this.setState({
//           time : new Date().toLocaleTimeString()
//         })
//       } , 1000)
//       return (
//           <div className="timer">
//             <h2>it is {this.state.time}</h2>
//           </div>
//       );
//     }
//   }
//   export default Timer;

// react life cicle

var inteTimer;
class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      loTime: new Date().toLocaleTimeString(),
    };
  }
  componentDidMount() {
    inteTimer = setInterval(() => {
      this.setState({
        loTime: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }
  componentDidUpdate() {
    if (this.state.loTime === "12:08:15 PM") {
      clearInterval(inteTimer);
    }
  }
  render() {
    return (
      <div className="timer">
        <h2> it is {this.state.loTime}</h2>
      </div>
    );
  }
}
export default Timer;