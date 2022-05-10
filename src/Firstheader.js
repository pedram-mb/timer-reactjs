import React from "react";
import ReactDOM from "react-dom";

class FirstHeader extends React.Component {
  render() {
    return (
      <h1 className="header">
        {this.props.title}
      </h1>
    );
  }
}

export default FirstHeader;
