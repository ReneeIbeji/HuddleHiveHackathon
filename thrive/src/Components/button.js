import React from "react";
import PropTypes from "prop-types";
import "./button.css"

export default class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func,
  };

  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    const className = [
      "component-button",
      this.props.name == "Login" ? "green" : "",
      this.props.name == "Register" ? "red" : "",
    ];

    return (
      <div>
        <button class={className.join(" ").trim()} onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
} 
