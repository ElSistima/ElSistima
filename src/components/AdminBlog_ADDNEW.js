import React, {Component} from 'react';
import '../styles/adminBlogNew.css';
import {connect} from 'react-redux';

class AdminBlog_ADDNEW extends Component{
  constructor(props){
    super(props);
      this.state={
        blogNewTitle: '',
        blogNewSubtitle: '',
        blogNewContent: ''
      }

  }

  trackTitleChange(event){
    this.setState({
      blogNewTitle: event.target.value
    })
  }

  trackSubtitleChange(event){
    this.setState({
      blogNewSubtitle: event.target.value
    })
  }

  trackContentChange(event){
    this.setState({
      blogNewContent: event.target.value
    })
  }

  render(){
    console.log("Content is: ", this.state.blogNewContent)
    const fullPageStyle = { width: "100%" }

    return(
      <main className="adminWrapperBlogNew" style={ this.props.dropdownDisplayed ? null : fullPageStyle}>
        <div className="adminContentContainerBlogNew">
          <div className="addNewBlogNew">
            <p className="adminPageTitleBlogNew">Create New Blog Post</p>
            <div className="topInputBlogNew">
              <input placeholder="Title" className="titleBlogNew" onChange={this.trackTitleChange.bind(this)}/>
              <input placeholder="Subtitle" className="subtitleBlogNew" onChange={this.trackSubtitleChange.bind(this)}/>
            </div>

            <div className="overwriteBlogNew">
              <textarea placeholder="Blog content here" className="contentBlogNew" onChange={this.trackContentChange.bind(this)}></textarea>
            </div>
          </div>

          <div className="addNewPicsBlogNew">
            <div className="addPicInnerBlogNew">
              <p className="picInnerTextBlogNew">Add Top Full Picture</p>
              <img src='https://i.imgur.com/FTLTf6u.png' />
              <div className="buttonBlogNew updateBtnBlogNew">SAVE</div>
            </div>
            <div className="addPicInnerBlogNew">
              <p className="picInnerTextBlogNew">Add 2nd Full Picture</p>
              <img src='https://i.imgur.com/FTLTf6u.png' />
              <div className="buttonBlogNew cancelBtnBlogNew">CANCEL</div>
            </div>
          </div>

        </div>

        <div className="saveCancelBtnContainerBlogNew">
          <div className="buttonBlogNew updateBtnBlogNewDesktop">SAVE</div>
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
