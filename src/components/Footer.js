import React from 'react';
import '../styles/footer.css';

export default function Footer(props){
  return (
    <footer className="footer">

      <div className="topFooterDiv">
        <section className="stayConnectediPhone">
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

        <section className="stayConnectedTabDesk">
          <h3>STAY CONNECTED</h3>
          <p>Enter your mobile number to start receiving text message notifications from El Sistema Pittsburgh! Unsubscribe at any time.</p>
          <div className="signUpForTexts">
          <input className="textInput"/>
          <div className="signUpButton">
            <p>Sign-Up</p>
          </div>
          </div>
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

        <section className="committedToPitt">
          <h3>COMMITTED TO PITTSBURGH</h3>
          <p>El Sistema Pittsburgh has successfully developed a diverse, qualified, and competent leadership committee focused on ensuring artistic and musical education. In part, a highly unique curriculum has been developed to meet the distinct needs of community residents while alleviating the current budget void that has transversely impacted public {"schools'"} art and music programs.</p>
        </section>
      </div>

      <div className="bottomFooterDiv">
        <p>El Sistema Pittsburgh - 6 Loop St. #4, Pittsburgh, PA 15215 - Map - Main (777) 465-2342</p>
        <p>Privacy Policy - Site Map - &copy; Copyright 2017</p>
      </div>
    </footer>
  )
}
