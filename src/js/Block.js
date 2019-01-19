import React, { Component } from 'react';
import '../styles/Block.css';
import blockimg from "../images/block.png"

class Block extends Component {
  constructor(props) {
    super(props);
    this.state = {description: "this is a description", url: "http://youtube.com"};

    // This binding is necessary to make `this` work in the callback
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.getThumbnail = this.getThumbnail.bind(this)
    this.getContent = this.getContent.bind(this)
  }

  render() {
    return (
      <div className="Block" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
          {this.getThumbnail()}
         <div className="BlockDescription">
          {this.getContent()}
         </div>
      </div>
    );
  }


  getThumbnail() {
    return (
      <a href={this.state.url}>
        <img className="BlockThumbnail" src={blockimg}></img>
      </a>
    )
  }

  getContent(){
    return (
      <div>
        {this.state.description}
      </div>
    )
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
