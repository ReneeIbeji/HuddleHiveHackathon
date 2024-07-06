import React from "react";
import PropTypes from "prop-types";
import "./button.css"
import { Link } from "react-router-dom"

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

    const link = [
      this.props.name == "Login" ?  <Link  to="/home"> + this.props.name + </Link> : "",
    ] 
    if (this.props.name == "Login"){
      return (
        <Link to="/home"><button class={className.join(" ").trim()}> {this.props.name}</button></Link>
      );
    }


    return (
      <button class={className.join(" ").trim()}>{this.props.name}</button>
    );

  }
} 
