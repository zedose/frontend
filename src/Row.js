import React, { Component } from 'react';
import './Row.css';

import Block from './Block';

class Row extends Component {
  render() {
    return (
      <div className="Row">
        { this.createBlocks() }
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
