import React, {Component} from 'react';
import './../styles/support.css';
import axios from 'axios';



class Volunteer extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      email:''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputName = this.handleInputName.bind(this);
    this.handleInputEmail = this.handleInputEmail.bind(this);
  }


handleSubmit(){
  axios.post('http://localhost:8080/api/volunteers', {name: this.state.name,
                                               email:this.state.email,
                                               title:'',
                                               profilePic:'',
                                               facebookLink:'',
                                               twitterLink:'',
                                               linkedInLink: '',
                                               summary:''
                                            }).then(res => console.log(res, 'successfully post volunteers'))
}

handleInputName(event){
  this.setState({
    name: event.target.value
  })
}

handleInputEmail(event){
  this.setState({
    email: event.target.value
  })
}


render(){
  // console.log('state', this.state.card)
  return (
    <div className="donate volunteer desktopVolunteer">
      <div className="donateTitle">Volunteer Sign-Up</div>

      <div className="volunteerInner">
        <div className="volunteerinnerTitle">Name</div>
        <input className="volunteerInput" onChange={this.handleInputName}/>
      </div>

      <div className="volunteerInner">
        <div className="volunteerinnerTitle">Email</div>
        <input className="volunteerInput" onChange={this.handleInputEmail}/>
      </div>


      <div className="volunteerInner volunteerSubmit">
        <div className="submitBtn" onClick={this.handleSubmit}><span>SUBMIT</span></div>
      </div>

    </div>
  )
}
}

export default Volunteer;
