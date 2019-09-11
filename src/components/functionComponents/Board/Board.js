import React from 'react';
import ObjectBoard from '../objectBoard/Object'
import './Board.css';



export class Board extends React.Component {

  state = {
    found: false,
  }


  deleteElements = (e) => {
    const element = document.querySelector(`#${e.target.id}`);
    element.parentNode.removeChild(element)
  }



  render() {
    return (
      <div className='board'>

      <ObjectBoard />


      </div>
    )
  }

}



