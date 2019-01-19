import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';

import RowList from './RowList';
import Header from './Header';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
		      <RowList />
      </div>
    );
  }
}

export default App;
