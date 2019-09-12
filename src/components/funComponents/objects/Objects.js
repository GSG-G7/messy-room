import React from "react";
// import icon1 from "../../../objects_icon/icon1.png";
import "./Objects.css";

const Objects = props => {
  return (
    <img id={props.id} src={props.icon} className={props.classes} alt="alt" />
  );
};

export default Objects;
