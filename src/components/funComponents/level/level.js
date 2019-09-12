import React from "react";
import Board from "../board/Board";
import Sidebar from "../../classComponents/sidebar/sidebar";

const Level = props => {
  return (
    <div>
      <Board
        boardArray={props.boardArray}
        onClick={props.onClick}
        background={props.boardUrl}
      />
      <Sidebar
        sideArray={props.sideArray}
        id={props.foundId}
        score={props.score}
      />
    </div>
  );
};

export default Level;
