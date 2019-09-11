import React, { Component } from "react";
import Objects from "../objects/Objects";
// import icon1 from "../../../objects_icon/icon1.png";
import "./sidebar.css";
class Sidebar extends Component {
  state = {
    score: 10
  };
  render() {
    return (
      <aside className="side">
        <p className="side-score">Score : {this.state.score}</p>
        <p className="side-time">Time</p>
        <ul className="side-list">
          {this.props.objArray.map(obj => (
            <li className="side-items">
              {this.props.id === obj.id ? (
                <Objects key={obj.id} icon={obj.icon} classes="" id={obj.id} />
              ) : (
                <Objects
                  key={obj.id}
                  icon={obj.icon}
                  classes="overlay"
                  id={obj.id}
                />
              )}
            </li>
          ))}
        </ul>
      </aside>
    );
  }
}

export default Sidebar;
