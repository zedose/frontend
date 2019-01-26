import React, { Component } from 'react';
import '../styles/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Logo">
          <h1>ZEDOSE</h1>
        </div>
        <div className="Menu">
          <p>Login</p>
        </div>
      </div>
    );
  }
}

export default Header;
