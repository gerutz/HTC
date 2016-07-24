import React, { Component } from 'react';

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
