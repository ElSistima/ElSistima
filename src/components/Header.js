import React, {Component} from 'react';
import '../styles/header.css';
import {Link} from 'react-router-dom';


class Header extends Component {
  constructor(props){
    super(props);
      this.state={
        currentPage: ''
      }
  }

componentDidMount(){
  this.setState({
    currentPage: 'home'
  })
}

leaveHome(){
  this.setState({
    currentPage: ''
  })
}

returnHome(){
  this.setState({
    currentPage: 'home'
  })
}

  render(){

    const homeHeader = {position: "relative"}
    const homeLogo = {position: "absolute", top: "35px", height: "12.5vh", width: "25%"}
    const homeLogoPhone = {position: "absolute", top: "13px", height: "6vh", width: "30%"}
    const homeLogoTablet = {position: "absolute", top: "35px", height: "8.5vh", width: "27.5%"}


    return (
      <main className="mainHeader">

      <Link to="/" className="headerLogoLink" onClick={this.returnHome.bind(this)}>
        <div className="logoContainerPhone" style={this.state.currentPage ? homeLogoPhone : null}>
        </div>

        <div className="logoContainerTablet" style={this.state.currentPage ? homeLogoTablet : null}>
        </div>

        <div className="logoContainerDesktop" style={this.state.currentPage ? homeLogo : null}>
        </div>
      </Link>

        <nav className="mainNav">
          <div className="link" onClick={this.returnHome.bind(this)} >
          <Link to="/">
          <p>Home</p>
          </Link>
          </div>

          <div className="link" onClick={this.leaveHome.bind(this)}>
          <Link to="/calendar">
          <p>Calendar</p>
          </Link>
          </div>

          <div className="link" onClick={this.leaveHome.bind(this)}>
          <Link to="/about">
          <p>About Us</p>
          </Link>
          </div>

          <div className="link" onClick={this.leaveHome.bind(this)}>
          <Link to="/media">
          <p>Media</p>
          </Link>
          </div>

          <div className="link" onClick={this.leaveHome.bind(this)}>
          <Link to="/blog">
          <p>Blog</p>
          </Link>
          </div>

          <Link to="/support" onClick={this.leaveHome.bind(this)}><div className="headerSupportButton"><p>Support Us</p></div></Link>
        </nav>
      </main>
    )
  }
}



export default Header;
