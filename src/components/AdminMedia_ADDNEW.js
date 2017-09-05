import React, {Component} from 'react';
import '../styles/adminMediaNew.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class AdminMedia_ADDNEW extends Component{
  constructor(props){
    super(props);
      this.state={
        mediaTitle: '',
        mediaCategory: '',
        mediaDescription: ''
      }
  }

  render(){

    const fullPageStyle = { width: "100%" }

    return(
      <main className="adminWrapperMediaNew" style={ this.props.dropdownDisplayed ? null : fullPageStyle}>
        <div className="adminContentContainerMediaNew">
          <div className="addNewMediaNew">
            <p className="adminPageTitleMediaNew">Add New Media</p>
            <div className="topInputMediaNew">
              <input placeholder="Title" value={this.state.mediaTitle} className="titleMediaNew" />
              <input placeholder="Category" value={this.state.mediaCategory} className="categoryMediaNew" />
            </div>

            <div className="midInputMediaNew">
              <input placeholder="Description" className="contentMediaNew" value={this.state.mediaDescription}></input>
            </div>

            <div className="bottomInputMediaNew">

            </div>
          </div>
        </div>


        <div className="saveCancelBtnContainerMediaNew">
          <div className="buttonMediaNew updateBtnMediaNewDesktop">SAVE</div>
          <div className="buttonMediaNew cancelBtnMediaNewDesktop">CANCEL</div>
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

export default connect(mapStateToProps)(AdminMedia_ADDNEW);
