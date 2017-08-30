import React, {Component} from 'react';
import '../styles/AdminBlog_ADDNEW.css';
import {connect} from 'react-redux';

class AdminBlog_ADDNEW extends Component{
  constructor(props){
    super(props);

  }

  render(){

    const fullPageStyle = { width: "100%" }

    return(
      <main className="AdminBlog_ADDNEW_Main" style={ this.props.dropdownDisplayed ? null : fullPageStyle}>
      <div className="add_new_blog">
        <div className="anb_headerText">Add New Blog</div>
        <div className="anb_topInput">
          <input placeholder="Title"/>
          <input placeholder="Caption"/>
        </div>

        <div className="anb_Content">
          <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></textarea>
        </div>
      </div>



      <div className="add_new_pics">
        <div className="add_pic_inner">
          <div>Add Top Full Picture</div>
          <img src='https://i.imgur.com/FTLTf6u.png' />
        </div>
        <div className="add_pic_inner">
          <div>Add 2nd Full Picture</div>
          <img src='https://i.imgur.com/FTLTf6u.png' />
        </div>
      </div>



      <div className="anb_btn">
        <div className="pblg save_btn">SAVE</div>
        <div className="pblg cancel_btn">CANCEL</div>
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

export default connect(mapStateToProps)(AdminBlog_ADDNEW);
