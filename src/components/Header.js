import React, {Component} from 'react';
import '../styles/header.css';
import {Link} from 'react-router-dom';
import {leaveHome, returnHome} from './../ducks/reducer';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props){
    super(props);
      this.state={
        defaultPage: this.props.currentPage
      }

}

componentDidMount(){
  this.setState({
    defaultPage: true
  })
}

  render(){
    const homeHeader = {position: "relative"}
    const homeLogo = {position: "absolute", top: "35px", height: "12.5vh", width: "25%"}
    const homeLogoPhone = {position: "absolute", top: "13px", height: "6vh", width: "30%"}
    const homeLogoTablet = {position: "absolute", top: "35px", height: "8.5vh", width: "27.5%"}
    const makeDark = { filter: 'brightness(50%)'}

    return (
      <main className="mainHeader" style={this.props.currentPage ? homeHeader : null} style={this.props.darken?makeDark:{}}>

      <Link to="/" className="headerLogoLink" onClick={()=>this.props.returnHome(true)}>
        <div className="logoContainerPhone" style={this.props.currentPage ? homeLogoPhone : null}>
        </div>

        <div className="logoContainerTablet" style={this.props.currentPage ? homeLogoTablet : null}>
        </div>

        <div className="logoContainerDesktop" style={this.props.currentPage ? homeLogo : null}>
        </div>
      </Link>

        <nav className="mainNav">
          <div className="link" onClick={()=>this.props.returnHome(true)} >
          <Link to="/">
          <p>Home</p>
          </Link>
          </div>

          <div className="link" onClick={()=>this.props.leaveHome(false)}>
          <Link to="/calendar">
          <p>Calendar</p>
          </Link>
          </div>

          <div className="link" onClick={()=>this.props.leaveHome(false)}>
          <Link to="/about">
          <p>About Us</p>
          </Link>
          </div>

          <div className="link" onClick={()=>this.props.leaveHome(false)}>
          <Link to="/media">
          <p>Media</p>
          </Link>
          </div>

          <div className="link" onClick={()=>this.props.leaveHome(false)}>
          <Link to="/blog">
          <p>Blog</p>
          </Link>
          </div>

          <Link to="/support" onClick={()=>this.props.leaveHome('')}><div className="headerSupportButton"><p>Support Us</p></div></Link>
        </nav>
      </main>
    )
  }
}

function mapStateToProps(state){
  return {
    currentPage: state.currentPage,
    darken: state.darken
  }
}


export default connect(mapStateToProps, {leaveHome, returnHome})(Header);
