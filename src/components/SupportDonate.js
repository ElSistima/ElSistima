import React, {Component} from 'react';
import './../styles/support.css';
import {injectStripe} from 'react-stripe-elements';
import {CardNumberElement} from 'react-stripe-elements';
import {CardExpiryElement} from 'react-stripe-elements';
import {CardCVCElement} from 'react-stripe-elements';
import axios from 'axios';



class SupportDonate extends Component {
  constructor(){
    super();
    this.state = {

    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }


handleSubmit(ev){
  ev.preventDefault();

  this.props.stripe.createToken().then( token => {
      console.log('Received Stripe token:', token);
      axios.post('http://localhost:8080/api/payment', { token, amount: 100 } ).then(response => {
          alert('Thank you for your donation')
        });
    });

}


render(){
  // console.log('state', this.state.card)
  return (
    <div className="donate">
      <div className="donateTitle">Donate</div>
      <div className="donateInnerBox">
        <input className="enterAmount" placeholder="$100" onChange={this.handleChangeAmount}/>
        <img src='https://i.imgur.com/hUaDjhR.png' />
      </div>
      <div className="donateInner">
        <label>
          <div className="donateInnerTitle">Credit Card Number</div>
          <div className="test">
          <CardNumberElement style={{base: {
            lineHeight: '50px',
            fontSize: '18px',

            '::placeholder': {
                color: '#ededed',
                fontSize: '15px',
            }
          }}} />
          </div>
        </label>
      </div>

      <div className="donateInner">
        <label>
          <div className="donateInnerTitle">Expiration</div>
          <div className="">
            <CardExpiryElement style={{base: {
                            lineHeight: '50px',
                            fontSize: '18px',

                            '::placeholder': {
                                color: '#ededed',
                                fontSize: '15px'
                            }}}} />
          </div>
        </label>
      </div>

      <div className="donateInner">
        <label>
          <div className="donateInnerTitle">CVC/CVV</div>
          <CardCVCElement style={{base: {
                lineHeight: '50px',
                fontSize: '13px',

                '::placeholder': {
                    color: '#ededed',
                    fontSize: '15px'
                }}}} />
        </label>
      </div>




      <div className="donateInner donationSubmit">
        <div className="submitBtn" onClick={ this.handleSubmit }><span>SUBMIT</span></div>
      </div>
    </div>
  )
}
}

export default injectStripe(SupportDonate);
