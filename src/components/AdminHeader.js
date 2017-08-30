import React, {Component} from 'react';
import '../styles/adminHeader.css';

export default class AdminHeader extends Component{
  constructor(props){
    super(props);
      
  }



  render(){

    return(
      <main className="Ad_headerMain">
      <div className="adHeader_left">
        <i className="ham fa fa-bars" aria-hidden="true" onClick={this.props.hamClicked}></i>
        <div>El Sistema Pittsburg - Website Administration</div>
      </div>
      <i className="dotBar fa fa-ellipsis-v" aria-hidden="true"></i>
      </main>
    )
  }
}
