import React, {Component} from 'react';
import '../styles/header.css';
import {Link} from 'react-router-dom';

export default class Header extends Component {
  render(){
    return (
      <main className="mainHeader">
        <div className="logoContainer">
        </div>

        <nav className="mainNav">
          <div className="link">
          <Link to="/">
          <p>Home</p>
          </Link>
          </div>

          <div className="link">
          <Link to="/calendar">
          <p>Calendar</p>
          </Link>
          </div>

          <div className="link">
          <Link to="/about">
          <p>About Us</p>
          </Link>
          </div>

          <div className="link">
          <Link to="/media">
          <p>Media</p>
          </Link>
          </div>

          <div className="link">
          <Link to="/blog">
          <p>Blog</p>
          </Link>
          </div>

          <Link to="/support"><div className="headerSupportButton"><p>Support Us</p></div></Link>
        </nav>
      </main>
    )
  }
}
