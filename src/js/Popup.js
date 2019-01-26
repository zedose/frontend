import React, { Component } from 'react';
import '../styles/Popup.css';

class Popup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='Popup' onClick={this.props.closePopup}>
        <div className='Popup-inner'>
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default Popup;
