import React, { Component } from 'react';
import './header.css'


class Header extends Component {
  state = {
    head: 'Level 1'
  }
  render() {

    return (
      <header className='heade'>
        <h1>
          Level {this.props.level}
        </h1>
      </header>



    );
  }
}

export default Header;