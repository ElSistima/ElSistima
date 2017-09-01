import React from 'react';
import './../styles/support.css';

export default function Support(props){
  return (
    <main className="supportUsWrapper">
      <div className="supportTopBody">
        <div className="supportTitle">Support El Sistema Pittsburgh</div>
        <div className="supportInnerBox">
          <div className="innerBoxTitle">Our Goals</div>
          <div className="innerBody">El Sistema Pittsburgh Provides Pittsburghs youth with accessible and intensive classical music instruction. Utilizing music as a vehicle for positive change, ESPGH promotes the development of music, cognitive and social skills, self-esteem, and community pride in youth.</div>
        </div>
        <div className="supportInnerBox">
          <div className="innerBoxTitle">How Donations are Used</div>
          <div className="innerBody">100% of all Donations are used to help fund El Sistemas materials, teachers, and concerts. Paypal takes a slight cut of 7% but the rest is distributed based on what is needed at the time. El Sistema complies with all E32c regulations and takes great pride in its transparency.</div>
        </div>
      </div>



      <div className="waysToHelp">
        <div className="helpTitle">3 Ways to Help</div>



        <div className="donate">
          <div className="donateTitle">Donate</div>
          <div className="donateInnerBox">
            <input className="enterAmount" placeholder="$100"/>
            <img src='https://i.imgur.com/hUaDjhR.png' />
          </div>
          <div className="donateInner">
            <div className="donateInnerTitle">Credit Card Number</div>
            <input className="cardNumInput" placeholder="4584 - "/>
          </div>
          <div className="donateInner">
            <div className="donateInnerTitle">Expiration</div>
            <div className="expirationInputLine">
              <input className="expirationInput"/> <input className="expirationInput"/>
            </div>
          </div>
          <div className="donateInner">
            <div className="donateInnerTitle">CVC/CVV</div>
            <div className="cvcInputLine">
              <input className="cvcTitle"/>
              <div> 3 or 4 digit code</div>
            </div>
          </div>
          <div className="donateInner">
            <div className="submitBtn"><span>SUBMIT</span></div>
          </div>
        </div>





        <div className="donate donateInstrument">
          <div className="donateTitle">Donate an Instrument</div>
          <div className="donateinstSubTitle">Call to schedule a drop-off</div>
          <div className="donateinstAddress">6 Loop St, # 4 <br/> Pittsburgh, Pennsylvania, PA 15215 <br/> (801)-224-8970</div>
        </div>




        <div className="donate volunteer">
          <div className="donateTitle">Volunteer Sign-Up</div>

          <div className="volunteerInner">
            <div className="volunteerinnerTitle">Name</div>
            <input className="volunteerInput"/>
          </div>

          <div className="volunteerInner">
            <div className="volunteerinnerTitle">Email</div>
            <input className="volunteerInput"/>
          </div>


          <div className="volunteerInner">
            <div className="submitBtn volunteerSubmit"><span>SUBMIT</span></div>
          </div>

        </div>



        <div className="supportShare">
          <div>Share</div>
          <div className="socialWrapper">
            <div className="socialCircleVolunteer"><i className="fa fa-facebook fa-fw" aria-hidden="true"></i></div>
            <div className="socialCircleVolunteer"><i className="fa fa-twitter fa-fw" aria-hidden="true"></i></div>
            <div className="socialCircleVolunteer"><i className="fa fa-linkedin fa-fw" aria-hidden="true"></i></div>
          </div>
        </div>

      </div>

    </main>
  )
}
