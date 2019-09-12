import React, { Component } from "react";
// import icon1 from "../../../objects_icon/icon1.png";
import "./Objects.css";

class Objects extends Component {
  state = {};

  render() {

    return (
      <img
        id={this.props.id}
        src={this.props.icon}
        className={this.props.classes}
        alt="alt"
      />
    );
  }
}

export default Objects;
