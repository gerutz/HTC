import React, { Component } from 'react';
import Radium from 'radium';

//Creamos componente HeaderComponent

export default class HeaderComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    //Estilos via Radium
    const styles = {
      homeNav : {
        position: 'fixed',
        width: '100%',
        zIndex: 100,
        backgroundColor: '#28282b'
      },
      logo : {
        float: 'left'
      },
      a : {
        textDecoration: 'none',
        color: '#ffffff'
      },
      menu : {
        border: '1px solid',
        padding: '2%'
      },
      bannerList : {
        float: 'right',
        padding: '0%',
        listStyle: 'none',
        display: 'inline',
        width: '21%',
        marginTop: '2%'
      },
      elementosNav : {
        float: 'left',
        border: '1px solid white',
        borderRadius: '2px',
        marginLeft: '3%',
        padding: '3%',
        fontSize: 'larger',
        color: '#ffffff'
      }
    }//end Styles

    return(
      <div>
          <HeaderNavBar />


      </div>
    );
  }
}//end HeaderComponent
HeaderComponent = Radium(HeaderComponent);


//Creamos componente HeaderNavBar

export default class HeaderNavBar extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){

    //Estilos via Radium
    const styles = {
      homeNav : {
        position: 'fixed',
        width: '100%',
        zIndex: 100,
        backgroundColor: '#28282b',
        height : '100px'
      },
      logo : {
        float: 'left'
      },
      a : {
        textDecoration: 'none',
        color: '#ffffff'
      },
      menu : {
        border: '1px solid',
        padding: '2%'
      },
      bannerList : {
        float: 'right',
        padding: '0%',
        listStyle: 'none',
        display: 'inline',
        width: '21%',
        marginTop: '2%'
      },
      elementosNav : {
        float: 'left',
        border: '1px solid white',
        borderRadius: '2px',
        marginLeft: '3%',
        padding: '3%',
        fontSize: 'larger',
        color: '#ffffff'
      }
    }//end Styles

    return(
      <div>
        <nav style={styles.homeNav}>
          <HeaderButton />
        </nav>
      </div>

    );
  }
} //end HeaderNavBar
HeaderNavBar = Radium(HeaderNavBar);

// Creamos componente HeaderButton



export default class HeaderButton extends Component {
  constructor(props){
    super(props);
  }

  render(){


    //Estilos via Radium
    const styles = {
      buttonWrapper : {
        float: 'right',
        padding: '0%',
        listStyle: 'none',
        display: 'inline',
        width: '21%',
        marginTop: '2%'
      },
      button : {
        float: 'left',
        border: '1px solid white',
        borderRadius: '2px',
        marginLeft: '3%',
        padding: '3%',
        fontSize: 'larger',
        color: '#ffffff'
      }
    }
    return(
      <div>
        <div style={styles.buttonWrapper}>
            <button style={styles.button}>Demo1</button>
            <button style={styles.button}>Demo2</button>
        </div>
      </div>
    );
  }
}//end HeaderButton
HeaderButton = Radium(HeaderButton);
