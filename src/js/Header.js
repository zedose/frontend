import React, { Component } from 'react';
import '../styles/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Logo">
          <h1><a href="index.js">zedose</a></h1>
        </div>
        <div className="Menu">
          <p>login</p>
        </div>
      </div>
    );
  }
}

export default Header;
