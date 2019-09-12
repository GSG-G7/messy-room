import React from "react";
import Objects from "../objects/Objects";

import "./Board.css";

const Board = props => {
  return (
    <div
      className="board"
      id="board"
      onClick={props.onClick}
      style={{ backgroundImage: `url(${props.background}) ` }}
    >
      {props.boardArray.map(obj => (
        <Objects
          key={obj.id}
          icon={obj.icon}
          classes={obj.class}
          id={obj.id}
          onClick={props.onClick}
        />
      ))}
    </div>
  );
};

export default Board;
