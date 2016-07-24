import React, { Component } from 'react';
import Radium from 'radium';

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
      <nav style={styles.homeNav}>
            <div style={styles.logo}><h1><a href="index.html">HowToCode</a></h1></div>
              <ul style={styles.bannerList}>
                      <li style={styles.elementosNav}>Login</li>
                      <li style={styles.elementosNav}>Registrarse</li>
              </ul>
        </nav>
      </div>
    );


  }
}//end HeaderComponent

HeaderComponent = Radium(HeaderComponent);
