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
        summary: null

      }

  }

  componentDidMount(){
    axios.get(`/api/volunteers/${this.props.match.params.vol_id}`).then(res => {
      console.log("Res data is: ", res.data[0])
      this.setState({
        fName: res.data[0].name.split(" ")[0],
        lName: res.data[0].name.split(" ")[1],
        email: res.data[0].email,
        title: res.data[0].title,
        bio: res.data[0].summary

      })
    })
  }

  render(){
    console.log("last name: ", this.state.lName)
    const fullPageStyle = { width: "100%" }

    return(
      <main className="AdminBlog_ADDNEW_Main" style={ this.props.dropdownDisplayed ? null : fullPageStyle}>
        <div className="add_new_blog volunteerOverwrite">
            <div className="anb_headerText">Update Volunteer</div>
            <div className="anb_topInput anv_topInput">
              <input placeholder="First Name" value={this.state.fName}/>
              <input placeholder="Last Name" value={this.state.lName}/>
            </div>

            <div className="lngipt"><input placeholder="Email Address" value={this.state.email} /></div>
            <div className="lngipt"><input placeholder="Job" value={this.state.title}/></div>

            <div className="maintxt_Content taOverwrite">
              <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " value={this.state.bio}></textarea>
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
          <div className="pblg save_btn volunteersaveOR">UPDATE</div>
        </div>


          <div className="add_pic_inner profileVolunteer">
            <div>Add Profile Picture</div>
            <img src='https://i.imgur.com/FTLTf6u.png' />
            <div className="pblg cancel_btn volunteercancelOR">CANCEL</div>
          </div>
        </div>

        <div className="web_btn">
          <div className="singlebtn web_save">UPDATE</div>
          <div className="singlebtn web_cancel">CANCEL</div>
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
