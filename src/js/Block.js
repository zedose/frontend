import React, { Component } from 'react';
import '../styles/Block.css';

class Block extends Component {
  constructor(props) {
    super(props);
    this.state = {description: "this is a description"};

    // This binding is necessary to make `this` work in the callback
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }
  render() {
    return (
      <div className="Block" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        <a href="https://youtube.com">
          <img className="BlockThumbnail">
          </img>

        </a>
        <div className="BlockDescription">{this.state.description}</div>

      </div>
    );
  }
  onMouseEnter(event) {
    this.setState(state => ({
          xxx: 2
        }));
  }

  onMouseLeave(event) {
    this.setState(state => ({
          xxx: 1
        }));
  }
}

export default Block;
