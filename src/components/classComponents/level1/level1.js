import React, { Component } from 'react';
import Board from './board/Board';
import Objects from './objects/Objects';
import Sidebar from './sidebar/sidebar';
import './level1.css'



class Level1 extends Component {
  state = {}
  render() {
    return (

      <div className='level1'>
        <Board boardArray={this.props.boardArray} onClick={this.props.onClick} />
        <Sidebar sideArray={this.props.sideArray} id={this.props.foundId} score={this.props.score} />
      </div>

    );
  }
}

export default Level1;