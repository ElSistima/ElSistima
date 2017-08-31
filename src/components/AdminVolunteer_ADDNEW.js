import React, {Component} from 'react';
import '../styles/AdminBlog_ADDNEW.css';
import {connect} from 'react-redux';



class AdminVolunteer_ADDNEW extends Component{
  constructor(props){
    super(props);

  }

  render(){

    const fullPageStyle = { width: "100%" }

    return(
      <main className="AdminBlog_ADDNEW_Main" style={ this.props.dropdownDisplayed ? null : fullPageStyle}>
        <div className="add_new_blog volunteerOverwrite">
            <div className="anb_headerText">Add New Volunteer</div>
            <div className="anb_topInput anv_topInput">
              <input placeholder="First Name"/>
              <input placeholder="Last Name"/>
            </div>

            <div className="lngipt"><input placeholder="Email Address"/></div>
            <div className="lngipt"><input placeholder="Job"/></div>

            <div className="maintxt_Content taOverwrite">
              <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "></textarea>
            </div>

            <div className="maintxt_Content taOverwrite">
              <textarea placeholder="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></textarea>
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
            <div className="pblg cancel_btn volunteercancelOR">CANCEL</div>
          </div>
        </div>

        <div className="web_btn">
          <div className="singlebtn web_save">SAVE</div>
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

export default connect(mapStateToProps)(AdminVolunteer_ADDNEW);
