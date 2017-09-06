import React, {Component} from 'react';
import '../styles/footer.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import MapInsert from './MapInsert';
import {mapClicked, darken} from '../ducks/reducer';

class Footer extends Component{


   mapClicked(){
     console.log('clicked yay')
    this.props.mapClicked(true);
    this.props.darken(true);
  }

  mapUnclicked(){
    this.props.mapClicked(false);
  }


render(){
  console.log(this.props.mapPopUp, 'hihihi')
  return (
    <footer className="footer">
    {this.props.mapPopUp?
        <div className="mapWrapper">
          <div className="crossOut" onClick={this.mapUnclicked.bind(this) }><i className="crossOutIcon fa fa-times" aria-hidden="true"></i>
</div>
          <MapInsert />
        </div>
      :
      ""}
      <div className="topFooterDiviPhone">
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
      </div>

      <div className="topFooterDivTabDesk">
        <div className="sectionsContainer">
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

        <section className="footerNavigation">
        <h3>NAVIGATION</h3>
        <div className="footerNavLinks">
          <Link to="/">
            <p>Home<i className="fa fa-caret-right fa-fw" aria-hidden="true"></i></p>
          </Link>

          <Link to="/about">
            <p>About Us<i className="fa fa-caret-right fa-fw" aria-hidden="true"></i></p>
          </Link>

          <Link to="/calendar">
            <p>Calendar<i className="fa fa-caret-right fa-fw" aria-hidden="true"></i></p>
          </Link>

          <Link to="/support">
            <p>Volunteer<i className="fa fa-caret-right fa-fw" aria-hidden="true"></i></p>
          </Link>

          <Link to="/support">
            <p>Donate<i className="fa fa-caret-right fa-fw" aria-hidden="true"></i></p>
          </Link>

        </div>
        <div className="signUpButton contact">
          <p>Contact Us</p>
        </div>
        </section>
      </div>
      </div>

      <div className="bottomFooterDiv">
        <div className="bottomContents">
        <p>El Sistema Pittsburgh - 6 Loop St. #4, Pittsburgh, PA 15215 - <span onClick={this.mapClicked.bind(this) }>Map</span> - Main (777) 465-2342</p>
        <p>Privacy Policy - Site Map - <a href={process.env.REACT_APP_LOGIN} className="authLogin">Admin</a> - &copy; Copyright 2017</p>
        </div>
      </div>
    </footer>
  )
}
}

function mapStateToProps(state){
  console.log(state, 'this is state')
  return {
    mapPopUp: state.mapClicked
  }
}


export default connect(mapStateToProps, {mapClicked, darken})(Footer);
