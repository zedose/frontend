import React, { Component } from 'react';
import '../styles/Block.css';
import blockimg from "../images/block.png";
import Popup from './Popup';
import Modal from 'react-modal';

class Block extends Component {
  constructor(props) {
    super(props);
    this.state = {description: "this is a description", url: "http://youtube.com", showPopup: false};

    // This binding is necessary to make `this` work in the callback
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onClick = this.onClick.bind(this);
    this.getThumbnail = this.getThumbnail.bind(this);
    this.getDescription = this.getDescription.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
  }

  render() {
    return (
      <div className="Block" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
          {this.getThumbnail()}
          {this.togglePopup()}
          <div className="BlockDescription" onClick={this.onClick}>
            {this.getDescription()}
          </div>

      </div>
    );
  }

  getDescription(){
    return (
      <div>
        {this.state.description}
      </div>
    );
  }

  createThumbnail() {
    return (
      ""
    );
  }

  getThumbnail() {
    return (
      ""
    );
  }

  togglePopup() {
    return (
      <div>
      {this.state.showPopup ?
        <Popup
          closePopup={this.onClick}
          content=<img src="https://images.unsplash.com/photo-1548373564-99ab96ed0dc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" />
          // content=<iframe width="560" height="315" src="https://www.youtube.com/embed/v8lu9ntmPJo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        />
        : null
      }
      </div>
    );
  }

  getThumbnail() {
    return (
      <a href={this.state.url}>
        <img className="BlockThumbnail" src={blockimg}></img>
      </a>
    );
  }

  onClick(event) {
    this.setState(state => ({
      showPopup: !this.state.showPopup
    }));
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
