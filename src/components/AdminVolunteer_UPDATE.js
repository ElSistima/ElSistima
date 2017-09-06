import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';



class AdminVolunteer_UPDATE extends Component{
  constructor(props){
    super(props);
      this.state={
        fName: null,
        lName: null,
        email: null,
        job: null,
        summary: null,
        facebookLink: null,
        twitterLink: null,
        linkedInLink: null

      }
  }

  componentDidMount(){
    axios.get('/api/admin')
      .then(res => {
        if(!res.data[0].admin_status){
          this.props.history.push('/')
        }
      })
    axios.get(`/api/volunteers/${this.props.match.params.vol_id}`).then(res => {
      console.log("Res data is: ", res.data[0])
      this.setState({
        fName: res.data[0].name.split(" ")[0],
        lName: res.data[0].name.split(" ")[1],
        email: res.data[0].email,
        title: res.data[0].title,
        bio: res.data[0].summary,
        facebookLink: res.data[0].facebook_link,
        twitterLink: res.data[0].twitter_link,
        linkedInLink: res.data[0].linkedin_link

      })
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
    axios.get(`/api/volunteers/${this.props.match.params.vol_id}`).then(res => {
      console.log("Res data is: ", res.data[0])
      this.setState({
        fName: res.data[0].name.split(" ")[0],
        lName: res.data[0].name.split(" ")[1],
        email: res.data[0].email,
        title: res.data[0].title,
        bio: res.data[0].summary,
        facebookLink: res.data[0].facebook_link,
        twitterLink: res.data[0].twitter_link,
        linkedInLink: res.data[0].linkedin_link
      })
    })
  }

  clickUpdate(){
    let updatedVolObj = {
      name: this.state.fName + " " + this.state.lName,
      email: this.state.email,
      title: this.state.job,
      facebookLink: this.state.facebookLink,
      twitterLink: this.state.twitterLink,
      linkedInLink: this.state.linkedInLink,
      summary: this.state.bio
    }

    axios.put(`/api/volunteers/${this.props.match.params.vol_id}`, updatedVolObj).then(res => {
      axios.get(`/api/volunteers/${this.props.match.params.vol_id}`).then(res => {
        console.log("Res data is: ", res.data[0])
        this.setState({
          fName: res.data[0].name.split(" ")[0],
          lName: res.data[0].name.split(" ")[1],
          email: res.data[0].email,
          title: res.data[0].title,
          bio: res.data[0].summary,
          facebookLink: res.data[0].facebook_link,
          twitterLink: res.data[0].twitter_link,
          linkedInLink: res.data[0].linkedin_link
        })
      }).catch(err => console.log(err))
    }).catch(err => console.log(err))
  }

  render(){
    console.log("last name: ", this.state.lName)
    const fullPageStyle = { width: "100%" }

    return(
      <main className="AdminBlog_ADDNEW_Main" style={ this.props.dropdownDisplayed ? null : fullPageStyle}>
        <div className="add_new_blog volunteerOverwrite">
            <div className="anb_headerText">Update Volunteer</div>
            <div className="anb_topInput anv_topInput">
              <input placeholder="First Name" value={this.state.fName} onChange={this.handleFNameUpdate.bind(this)}/>
              <input placeholder="Last Name" value={this.state.lName} onChange={this.handleLNameUpdate.bind(this)}/>
            </div>

            <div className="lngipt"><input placeholder="Email Address" value={this.state.email} onChange={this.handleEmailUpdate.bind(this)}/></div>


            <div className="anb_topInput anv_topInput">
              <input placeholder="Facebook URL" value={this.state.facebookLink} onChange={this.handleFacebookUpdate.bind(this)}/>
              <input placeholder="Twitter URL" value={this.state.twitterLink} onChange={this.handleTwitterUpdate.bind(this)}/>
              <input placeholder="LinkedIn URL" value={this.state.linkedinLink} onChange={this.handleLinkedInUpdate.bind(this)}/>
            </div>


            <div className="lngipt"><input placeholder="Job" value={this.state.title} onChange={this.handleTitleUpdate.bind(this)}/></div>

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
          <div className="pblg save_btn volunteersaveOR" onClick={this.clickUpdate.bind(this)}>UPDATE</div>
        </div>


          <div className="add_pic_inner profileVolunteer">
            <div>Add Profile Picture</div>
            <img src='https://i.imgur.com/FTLTf6u.png' />
            <div className="pblg cancel_btn volunteercancelOR" onClick={this.clickCancel.bind(this)}>CANCEL</div>
          </div>
        </div>

        <div className="web_btn">
          <div className="singlebtn web_save" onClick={this.clickUpdate.bind(this)}>UPDATE</div>
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

export default connect(mapStateToProps)(AdminVolunteer_UPDATE);
