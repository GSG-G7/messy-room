import React from "react";
import Objects from "../../funComponents/objects/Objects";
import "./sidebar.css";
const Sidebar = props => {
  const generateObject = () => {
    return props.sideArray.map(obj => (
      <li className="side-items">
        {props.id.includes(obj.id) ? (
          <Objects key={obj.id} icon={obj.icon} classes="" id={obj.id} />
        ) : (
          <Objects key={obj.id} icon={obj.icon} classes="overlay" id={obj.id} />
        )}
      </li>
    ));
  };

  return (
    <aside className="side">
      <p className="side-score">
        Score : <span>{props.score}</span>
      </p>
      <ul className="side-list">{generateObject()}</ul>
    </aside>
  );
};

export default Sidebar;
