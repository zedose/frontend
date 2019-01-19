import React, { Component } from 'react';
import '../styles/Row.css';

import Block from './Block';

class Row extends Component {
  render() {
    return (
      <div className="RowContainer">
        <div className="RowSubject">
          <h3>Subject</h3>
        </div>
        <div className="Row">
        { this.createBlocks() }
        </div>
      </div>
    );
  }

  createBlocks() {
    let blocks = [];
    blocks.push(<Block/>);
    blocks.push(<Block/>);
    return blocks;
  }
}

export default Row;
