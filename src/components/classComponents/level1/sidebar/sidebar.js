import React, { Component } from "react";
import Objects from "../objects/Objects";
import "./sidebar.css";
class Sidebar extends Component {

  state = {
    score: 0
  };
  render() {
    return (
      <aside className="side">
        <p className="side-score">Score : {this.props.score}</p>
        <p className="side-time">Time</p>
        <ul className="side-list">
          {this.props.sideArray.map(obj => (
            <li className="side-items">

              {this.props.id.includes(obj.id) ? (
                <Objects key={obj.id} icon={obj.icon} classes="" id={obj.id} />
              ) : (
                  <Objects
                    key={obj.id}
                    icon={obj.icon}
                    classes="overlay"
                    id={obj.id}

                  />
                )
              }

            </li>
          ))}
        </ul>
      </aside>
    );

  }



}

export default Sidebar;
