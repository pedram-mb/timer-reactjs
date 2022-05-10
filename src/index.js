import React from "react";
import ReactDOM from "react-dom";

//  raveshe avale ejraye yek dastoor

// const Timer = ()=>{
//   const element = (
//     <div>
//       <h1>
//         timer with method date , local time string
//       </h1>
//       <h2>
//         it is {new Date().toLocaleTimeString()}
//       </h2>
//     </div>
//   )
//   ReactDOM.render(element , document.getElementById('root'));
// }
// setInterval(()=>{
//   Timer();
// } , 1000)

// sakht component class braye ejraye dastoor timer

// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>
//           timer with method date , local time string + class component
//         </h1>
//         <h2>
//           it is {new Date().toLocaleTimeString()}
//         </h2>
//       </div>
//     )
//   }
// }
// const Timer = ()=>{
//   ReactDOM.render(<App/> , document.getElementById('root'));
// }
// setInterval(()=>{
//   Timer();
// } , 1000)

// sakht hamin timer tavasoot chand component

// class FirstHeader extends React.Component {
//   render() {
//     return (
//         <h1 className="header">timer with method date , local time string + class component</h1>
//     );
//   }
// }
// class SecoundHeader extends React.Component {
//   render() {
//     return (
//         <div className="timer">
//           <h2>it is {new Date().toLocaleTimeString()}</h2>
//         </div>
//     );
//   }
// }
// class App extends React.Component {
//   render() {
//     return (
//       <div className="main">
//         <FirstHeader />
//         <SecoundHeader />
//       </div>
//     );
//   }
// }
// const Timer = ()=>{
//   ReactDOM.render(<App/> , document.getElementById('root'))
// }
// setInterval(()=>{
//   Timer()
// } , 1000)

// sakhte timer tavasote state va setState

// class FirstHeader extends React.Component {
//   render() {
//     return (
//         <h1 className="header">timer with method date , local time string + class component</h1>
//     );
//   }
// }
// class Timer extends React.Component {
//   constructor(){
//     super()
//     this.state = {
//       time : new Date().toLocaleTimeString()
//     }
//   }
//   render() {
//     setInterval(()=>{
//       this.setState({
//         time : new Date().toLocaleTimeString()
//       })
//     } , 1000)
//     return (
//         <div className="timer">
//           <h2>it is {this.state.time}</h2>
//         </div>
//     );
//   }
// }
// class App extends React.Component {
//   render() {
//     return (
//       <div className="main">
//         <FirstHeader />
//         <Timer />
//       </div>
//     );
//   }
// }
// ReactDOM.render(<App/> , document.getElementById('root'));

// component mehvar hamin project

import App from "./App";

ReactDOM.render(<App/> , document.getElementById('root'));