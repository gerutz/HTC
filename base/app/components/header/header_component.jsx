import React, { Component } from 'react';
import Radium from 'radium';

export default class HeaderComponent extends Component {
  constructor(props){
    super(props);

    this.state = {
      usuario : [],
      login : {
        status : false,
        id : ""
      },
      register : {
        status : false,
        id : ""
      }
    }
  }

  onLogin(usuarios) {
    const nuevoUsuario = usuarios.map((usuario)=>{
      return{
          id : usuario.id,
          nombre : usuario.nombre,
          apellido : usuario.apellido,
          email : usuario.email,
          img : usuario.img
      }
    });

    this.setState({login: {status : true, id : nuevoUsuario.id}});
    this.setState({usuario : nuevoUsuario});
      console.log(this.state.login.status);
  }

  onLogOut(){
    this.setState({login: {status : false, id : ""}});
  }

    render() {
      //Estilos via Radium
      const styles = {
        headerWrapper : {
          position: 'fixed',
          width: '100%',
          zIndex: 100,
          backgroundColor: '#28282b'
        },
        loginWrapper :{
          display : 'inline'
        },
        perfilWrapper : {
          display : 'none'
        },
        menuWrapper : {
          display : 'none'
        }
      };

    return(
      <div style={styles.headerWrapper}>
        <div style={styles.logoWrapper}>
            <h1>Logo </h1>
        </div>
        <div style={styles.loginWrapper}>
          <LoginComponent
            onLogin = {this.onLogin.bind(this)}
            usuarios = {this.state.usuario}
          />
        </div>

{/*
  <div style={styles.perfilWrapper}>
    <PerfilComponent />
  </div>
  <div style={styles.menuWrapper}>
    <MenuComponent />
  </div>

*/}

      </div>
    );
  }
}// end HeaderComponent

export default class LoginComponent extends Component {
  static get PropTypes(){
    onLogin : PropTypes.function.isRequired;
    usuarios : PropTypes.array.isRequired;
  }
  render(){
    return(
      <div>
        <button onClick={this.props.onLogin}>Login</button>
        <button>Register</button>
      </div>

    );
  }
}
