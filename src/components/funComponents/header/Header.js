import React, { Component } from "react";
import "./header.css";

const Header = props => {
  return (
    <header className="heade">
      <h1>Level {props.level}</h1>
    </header>
  );
};

export default Header;
