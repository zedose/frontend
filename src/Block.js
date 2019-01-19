import React, { Component } from 'react';
import logo from './logo.svg';
import './Block.css';

class Block extends Component {
  render() {
    return (
      <div className="Block">		
		  <img src={logo} className="App-logo" alt="logo" />
		  <a
			href="https://youtube.com"
			target="_blank"
			rel="noopener noreferrer"
		  >
			do something
		  </a>
        
      </div>
    );
  }
}

export default App;
