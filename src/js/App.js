import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';

import Block from './Block';
import Header from './Header';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
		      <Block />
      </div>
    );
  }
}

export default App;
