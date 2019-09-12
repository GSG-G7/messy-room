import React, { Component } from "react";
import Objects from "../objects/Objects";

import "./Board.css";

class Board extends Component {
  state = {};

  render() {

    return (
      <div className="board" id="board" onClick={this.props.onClick}>
        {this.props.boardArray.map(obj => (
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
