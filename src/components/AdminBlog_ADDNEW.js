import React, {Component} from 'react';
import '../styles/adminBlogNew.css';
import {connect} from 'react-redux';

class AdminBlog_ADDNEW extends Component{
  constructor(props){
    super(props);

  }

  render(){

    const fullPageStyle = { width: "100%" }

    return(
      <main className="adminWrapperBlogNew" style={ this.props.dropdownDisplayed ? null : fullPageStyle}>
        <div className="adminContentContainerBlogNew">
          <div className="addNewBlogNew">
            <p className="adminPageTitleBlogNew">Update BlogNew</p>
            <div className="topInputBlogNew">
              <input placeholder="Title" className="titleBlogNew"/>
              <input className="captionInputBlogNew" placeholder="Subtitle" className="subtitleBlogNew"/>
            </div>

            <div className="overwriteBlogNew">
              <textarea placeholder="Blog content here" className="contentBlogNew"></textarea>
            </div>
          </div>

          <div className="addNewPicsBlogNew">
            <div className="addPicInnerBlogNew">
              <p className="picInnerTextBlogNew">Add Top Full Picture</p>
              <img src='https://i.imgur.com/FTLTf6u.png' />
              <div className="buttonBlogNew updateBtnBlogNew">UPDATE</div>
            </div>
            <div className="addPicInnerBlogNew">
              <p className="picInnerTextBlogNew">Add 2nd Full Picture</p>
              <img src='https://i.imgur.com/FTLTf6u.png' />
              <div className="buttonBlogNew cancelBtnBlogNew">CANCEL</div>
            </div>
          </div>

        </div>

        <div className="saveCancelBtnContainerBlogNew">
          <div className="buttonBlogNew updateBtnBlogNewDesktop">UPDATE</div>
          <div className="buttonBlogNew cancelBtnBlogNewDesktop">CANCEL</div>
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
