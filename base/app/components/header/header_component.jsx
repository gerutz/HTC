import React, { Component } from 'react';

//Creamos componente HeaderComponent

export default class HeaderComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      login : false,
    };
  }

  render() {

    return(
      <div>
        <h1>Hola Mundo</h1>
      </div>
    );
  }
}//end HeaderComponent
