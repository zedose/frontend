import React, { Component } from 'react';
import '../styles/Row.css';

import Block from './Block';
import YouTubeBlock from './YouTubeBlock';

class Row extends Component {
  render() {
    return (
      <div className="RowContainer">
        <div className="RowSubject">
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
    blocks.push(<Block/>);
    blocks.push(<Block/>);
    return blocks;
  }
}

export default Row;
