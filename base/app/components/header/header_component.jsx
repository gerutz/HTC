import React, { Component } from 'react';
import styles from '../styles/styles.css';

//Creamos componente HeaderComponent

export default class HeaderComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      session_login : false,
      log_in_false : 'Login',
      log_in_true: 'LogOut',
      register :'Registrate',
      avatar_img : "https://media.licdn.com/media/AAEAAQAAAAAAAAQBAAAAJGU3M2Y3YWI2LWVjMTAtNGE5ZS1hZDVlLTc3ZTY4NGM5NTc3ZA.jpg",

    };
  }

  handleLogin(){
    return this.setState({session_login : true});
  }

  handleLogOut(){
    return this.setState({session_login : false});
  }

  render() {

    return(
      <div>
        <div className="styles.container">
          <div className="logo_wrapper">
            <a href="#"><img src="#" />HTC</a>
          </div>
          <div className="button_wrapper">
            <HeaderButton title = {this.state.log_in_true} onOperar={this.handleLogin.bind(this)}/>
            <HeaderButton title = {this.state.register}/>
          </div>
{/*
          <div className="avatar_wrapper">
            <HeaderAvatar img={this.state.avatar_img}/>
          </div>
*/}
          <div className="header_menu_wrapper">
            <HeaderMenu />
          </div>
        </div>
      </div>
    );
  }
}//end HeaderComponent

export default class HeaderButton extends Component{
  static get propTypes(){
    return{
      title : propTypes.string.isRequired,
    }
  }


  render(){
    return(
      <div>
        <button>{this.props.title}</button>
      </div>
    );
  }
}// end HeaderButton

{/*


export default class HeaderAvatar extends Component {

  static get propTypes{
    return {
      avatar_img : propTypes.string.isRequired
    }
  }

  render(){
    return(
      <div>
        <img src={this.props.avatar_img}/>
      </div>
    );
  }
}//end HeaderAvatar

*/}

export default class HeaderMenu extends Component {

  render(){
    return(
      <div>
        <ul>
          <li><a href="#">Editar</a></li>
          <li><a href="#">Favoritos</a></li>
          <li><a href="#">Comentarios</a></li>
          <li><a href="#">Salir</a></li>
        </ul>
        </div>
    );
  }
}
