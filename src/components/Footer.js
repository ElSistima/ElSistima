import React from 'react';
import '../styles/footer.css';

export default function Footer(props){
  return (
    <footer className="footer">

      <div className="topFooterDiv">
        <section className="stayConnected">
          <p>STAY CONNECTED</p>
          <div className="socialIcons">

          <a href="https://www.facebook.com/ElSistemaPittsburgh/" target="_blank">
            <div className="socialCircle"><i className="fa fa-facebook fa-fw" aria-hidden="true"></i></div>
          </a>

          <a href="https://twitter.com/elsistema" target="blank">
            <div className="socialCircle"><i className="fa fa-twitter fa-fw" aria-hidden="true"></i></div>
          </a>

          <a href="https://www.linkedin.com/company/3276954/" target="_blank">
            <div className="socialCircle"><i className="fa fa-linkedin fa-fw" aria-hidden="true"></i></div>
          </a>
          
          </div>
        </section>

      </div>

      <div className="bottomFooterDiv">
        <p>El Sistema Pittsburgh - 6 Loop St. #4, Pittsburgh, PA 15215 - Map - Main (777) 465-2342</p>
        <p>Privacy Policy - Site Map - &copy Copyright 2017</p>
      </div>
    </footer>
  )
}
