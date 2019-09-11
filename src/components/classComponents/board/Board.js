import React, { Component } from "react";
import Objects from "../objects/Objects";

import "./Board.css";

class Board extends Component {
  state = {};

  render() {
    console.log(this.props.objArray);

    return (
      <div className="board">
        {this.props.objArray.map(obj => (
          <Objects
            key={obj.id}
            icon={obj.icon}
            classes={obj.class}
            id={obj.id}
            onClick={this.props.onClick}
          />
        ))}
      </div>
    );
  }
}

export default Board;
