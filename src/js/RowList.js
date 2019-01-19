import React, { Component } from 'react';
import '../styles/RowList.css';

import Row from './Row';

class RowList extends Component {
  render() {
    return (
      <div className="RowList">
        <Row/>
        <Row/>
      </div>
    );
  }


}

export default RowList;
