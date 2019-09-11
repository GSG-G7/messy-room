import React, { Component } from 'react';
import './object.css';
class ObjectBoard extends Component {
  state = {}



  deleteElements = (e) => {
    const element = document.querySelector(`#${e.target.id}`);
    // element.parentNode.removeChild(element)
    console.log(element);
  }
  clicked = (e) => {
    const element = document.querySelector(`#${e.target.id}`);
    // element.parentNode.removeChild(element)
    console.log(element);
  }


  render() {
    return (

      <img id="one" src={require("../../../objects/1.png")} alt="" className="one" onClick={this.clicked} />



    );
  }
}

export default ObjectBoard;