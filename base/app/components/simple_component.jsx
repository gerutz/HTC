import React, { Component } from 'react';
//import {HeaderComponent} from 'header_component';

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

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      controlledInputValue: ''
    };
  }

  render() {
    return(
      <div>
        <h1>Hola Loco</h1>
      </div>
    );
  }
}
