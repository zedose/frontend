import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';

import Row from './Row';
import Header from './Header';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
		      <Row />
      </div>
    );
  }
}

export default App;
