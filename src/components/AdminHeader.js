import React, {Component} from 'react';
import '../styles/adminHeader.css';
import {Link} from 'react-router-dom';


export default class AdminHeader extends Component{


  render(){

    return(
      <main className="Ad_headerMain">
      <div className="adHeader_left">
        <i className="ham fa fa-bars" aria-hidden="true" onClick={this.props.hamClicked}></i>
        <div className="adminHeaderText">El Sistema Pittsburg - Website Administration</div>
      </div>
      <Link to="/" className="publicHomeLink">
        <i className="dotBar fa fa-home" aria-hidden="true"></i>
      </Link>
      </main>
    )
  }
}
