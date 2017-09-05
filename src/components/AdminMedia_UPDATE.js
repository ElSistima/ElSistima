import React, {Component} from 'react';
import './../styles/adminBlog_ADDNEW.css';
import {connect} from 'react-redux';

class AdminMedia_UPDATE extends Component{
  constructor(props){
    super(props);

  }

  render(){
    const fullPageStyle = { width: "100%" }
    return(
      <main className="AdminBlog_ADDNEW_Main" style={ this.props.dropdownDisplayed ? null : fullPageStyle}>
      <div className="add_new_blog">
        <div className="anb_headerText">Edit Media</div>
        <div className="anb_topInput">
          <input placeholder="Title"/>
          <input placeholder="Category"/>
        </div>

        <div className="maintxt_Content anb_overwrite ta_CT_Overwrite">
          <div className="ta_Description">Description</div>
          <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
        </div>
      </div>



      <div className="add_new_pics ta_video">
        <div className="add_pic_inner ta_picInner">
          <div>Video</div>
          <img src='https://i.imgur.com/FTLTf6u.png' />
        </div>
      </div>


      <div className="contentPicBtn">
        <div className="pblg save_btn">SAVE</div>
        <div className="pblg cancel_btn ta_btn">CANCEL</div>
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

export default connect(mapStateToProps)(AdminMedia_UPDATE);
