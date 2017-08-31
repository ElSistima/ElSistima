import React, {Component} from 'react';
import '../styles/AdminBlog_ADDNEW.css';
import {connect} from 'react-redux';

class AdminCT_ADDNEW extends Component{
  constructor(props){
    super(props);

  }

  render(){

    const fullPageStyle = { width: "100%" }

    return(
      <main className="AdminBlog_ADDNEW_Main" style={ this.props.dropdownDisplayed ? null : fullPageStyle}>
      <div className="add_new_blog">
        <div className="anb_headerText">Add New Text Content</div>
        <div className="anb_topInput">
          <input placeholder="Catagory"/>
          <input placeholder="Title"/>
        </div>

        <div className="maintxt_Content anb_overwrite">
          <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
        </div>
      </div>



      <div className="ctBT_overwrite">
        <div className="ctBT_singlebtn ctBT_web_save">SAVE</div>
        <div className="ctBT_singlebtn ctBT_web_cancel">CANCEL</div>
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

export default connect(mapStateToProps)(AdminCT_ADDNEW);
