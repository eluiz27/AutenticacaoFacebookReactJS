import React, { Component } from 'react';
import FacebookLoginBtn from 'react-facebook-login';

import icone from '../icons/iconFace.png';

import '../App.css';

export default class LoginFacebook extends Component {
  state = {
    auth: false,
    userID: '',
    name: '',
    email: '',
    picture: ''
  }

  componentClicked = () => {
    console.log('Facebook bnt clicked');
  }

  responseFacebook = (response) => {
    console.log(response);
    if(response.status !== 'unknown')
    this.setState({
      auth: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  }

  componentClickedLogout = () => {
    this.setState({
      auth: false,
    });
  }

  render(){
    let facebookData;

    this.state.auth ?
      facebookData = (
        <div>
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Bem vindo {this.state.name}</h2>
          <button
            type="button"
            className="logout"  
            onClick={this.componentClickedLogout}>Logout</button>
        </div>
      ) :
      facebookData = (
      <FacebookLoginBtn
        appId="483259252569721"
        autoLoad={true}
        fields="name,email,picture"
        cssClass="facebook"
        language="pt_BR"
        icon={<img className="logoFace" src={icone} alt=""/>}
        textButton="Entrar com o Facebook"    
        callback={this.responseFacebook} 
        onClick={this.componentClicked}/>
      );

    return(
      <>
        {facebookData}
      </>
    );
  }
}