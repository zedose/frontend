import React, { Component } from 'react';
import '../styles/Popup.css';

class Popup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='Popup'>
        <div className='Popup-inner'>
          <h1>{this.props.text}</h1>
        <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}

export default Popup;
