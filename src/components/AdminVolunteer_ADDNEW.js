import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class AdminVolunteer_ADDNEW extends Component{
  constructor(props){
    super(props);
    this.state={
      fName: '',
      lName: '',
      email: '',
      title: '',
      bio: '',
      facebookLink: '',
      twitterLink: '',
      linkedInLink: ''
    }
  }

  componentDidMount(){
    axios.get('/api/admin')
      .then(res => {
        if(!res.data[0].admin_status){
          this.props.history.push('/')
        }
      })
  }

  handleFNameUpdate(event){
    this.setState({
      fName: event.target.value
    })
  }

  handleLNameUpdate(event){
    this.setState({
      lName: event.target.value
    })
  }

  handleEmailUpdate(event){
    this.setState({
      email: event.target.value
    })
  }

  handleTitleUpdate(event){
    this.setState({
      title: event.target.value
    })
  }

  handleBioUpdate(event){
    this.setState({
      bio: event.target.value
    })
  }

  handleFacebookUpdate(event){
    this.setState({
      facebookLink: event.target.value
    })
  }

  handleTwitterUpdate(event){
    this.setState({
      twitterLink: event.target.value
    })
  }

  handleLinkedInUpdate(event){
    this.setState({
      linkedInLink: event.target.value
    })
  }

  clickCancel(){
    alert("Are you sure you want to cancel changes?")
    this.setState({
      fName: '',
      lName: '',
      email: '',
      title: '',
      bio: '',
      facebookLink: '',
      twitterLink: '',
      linkedInLink: ''
    })
  }

  clickSave() {
    let newVolObj = {
      name: this.state.fName + " " + this.state.lName,
      email: this.state.email,
      title: this.state.title,
      profilePic: "https://s3.amazonaws.com/devmountain/www/img/pic-jeremy.jpg",
      facebookLink: this.state.facebookLink,
      twitterLink: this.state.twitterLink,
      linkedInLink: this.state.linkedInLink,
      summary: this.state.bio
    }
    !this.state.fName || !this.state.lName || !this.state.email || !this.state.title || !this.state.bio ? alert("Be sure you have input your first and last name, email, job title, and a short bio about yourself before submitting your volunteer information.") :
    axios.post('/api/volunteers', newVolObj).then(res => {
      alert("New volunteer created.")
      this.setState({
        fName: '',
        lName: '',
        email: '',
        title: '',
        bio: '',
        facebookLink: '',
        twitterLink: '',
        linkedInLink: ''
      })
    }).catch(err => console.log(err))
  }

  render(){

    const fullPageStyle = { width: "100%" }

    return(
      <main className="AdminBlog_ADDNEW_Main" style={ this.props.dropdownDisplayed ? null : fullPageStyle}>
        <div className="add_new_blog volunteerOverwrite">
            <div className="anb_headerText">Add New Volunteer</div>
            <div className="anb_topInput anv_topInput">
              <input placeholder="First Name" value={this.state.fName} onChange={this.handleFNameUpdate.bind(this)}/>
              <input placeholder="Last Name"value={this.state.lName} onChange={this.handleLNameUpdate.bind(this)}/>
            </div>

            <div className="lngipt"><input placeholder="Email Address" value={this.state.email} onChange={this.handleEmailUpdate.bind(this)}/></div>
            <div className="lngipt"><input placeholder="Job" value={this.state.title} onChange={this.handleTitleUpdate.bind(this)} /></div>

            <div className="anb_topInput anv_topInput">
              <input placeholder="Facebook URL" value={this.state.facebookLink} onChange={this.handleFacebookUpdate.bind(this)}/>
              <input placeholder="Twitter URL" value={this.state.twitterLink} onChange={this.handleTwitterUpdate.bind(this)}/>
              <input placeholder="LinkedIn URL" value={this.state.linkedinLink} onChange={this.handleLinkedInUpdate.bind(this)}/>
            </div>

            <div className="maintxt_Content taOverwrite">
              <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " value={this.state.bio} onChange={this.handleBioUpdate.bind(this)}></textarea>
            </div>
        </div>

        <div className="permission">
          <div>Permissions</div>

          <div className="checkBody">
              <div className="singleCheck">
                <input type="checkbox"></input>
                <div>All</div>
              </div>


              <div className="singleCheck">
                <input type="checkbox"></input>
                <div>Blog</div>
              </div>


              <div className="singleCheck">
                <input type="checkbox"></input>
                <div>Videos</div>
              </div>


              <div className="singleCheck">
                <input type="checkbox"></input>
                <div>Classes</div>
              </div>


              <div className="singleCheck">
                <input type="checkbox"></input>
                <div>Performance</div>
              </div>

              <div className="singleCheck">
                <input type="checkbox"></input>
                <div>Content</div>
              </div>
          </div>
        </div>


        <div className="add_new_pics volunteer_anp">

        <div className="add_pic_inner fullpicvolunteer">
          <div>Add Full Picture</div>
          <img src='https://i.imgur.com/FTLTf6u.png' />
          <div className="pblg save_btn volunteersaveOR">SAVE</div>
        </div>


          <div className="add_pic_inner profileVolunteer">
            <div>Add Profile Picture</div>
            <img src='https://i.imgur.com/FTLTf6u.png' />
            <div className="pblg cancel_btn volunteercancelOR" onClick={this.clickCancel.bind(this)}>CANCEL</div>
          </div>
        </div>

        <div className="web_btn">
          <div className="singlebtn web_save" onClick={this.clickSave.bind(this)}>SAVE</div>
          <div className="singlebtn web_cancel" onClick={this.clickCancel.bind(this)}>CANCEL</div>
        </div>

      </main>
    )
  }
}

function mapStateToProps(state){
  return{
    dropdownDisplayed: state.clicked
  }
}

export default connect(mapStateToProps)(AdminVolunteer_ADDNEW);
