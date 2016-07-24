import React, { Component } from 'react';
import HeaderComponent from './header/header_component';

export default class SimpleComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      controlledInputValue: ''
    };
  }

  render() {
    return(
      <div>
        <HeaderComponent />
      </div>
    );
  }
}
