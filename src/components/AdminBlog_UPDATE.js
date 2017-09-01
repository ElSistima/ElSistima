import React, {Component} from 'react';
import '../styles/adminBlogEditor.css';
import axios from 'axios';
import {connect} from 'react-redux';

class AdminBlog_UPDATE extends Component{
  constructor(props){
    super(props);
      this.state={
        postTitle: '',
        postSubtitle: '',
        postContent: '',
        postImg: null,
        postThumbnail: null,
        postDateMonth: null,
        postDateDay: null,
        postDateYear: null,
      }
  }

  componentDidMount(){
    console.log("Param is: ", this.props.match.params.posts_id)
    axios.get(`/api/blogs/${this.props.match.params.posts_id}`).then(res => {
      console.log("Response is:", res.data)
      this.setState({
        post: res.data[0],
        postTitle: res.data[0].post_title,
        postSubtitle: res.data[0].blog_subtitle,
        postContent: res.data[0].post_content,
        postImg: res.data[0].blog_image,
        postDateMonth: res.data[0].date_month,
        postDateDay: res.data[0].date_day,
        postDateYear: res.data[0].date_year,
        postThumbnail: res.data[0].post_thumbnail
      })
    }).catch(err => console.log(err))
  }

  handleTitleUpdate(event){
    this.setState({
      postTitle: event.target.value
    })
  }

  handleSubtitleUpdate(event){
    this.setState({
      postSubtitle: event.target.value
    })
  }

  handleContentUpdate(event){
    this.setState({
      postContent: event.target.value
    })
  }

  clickCancel(){
    alert("Are you sure you want to cancel changes?")
    axios.get(`/api/blogs/${this.props.match.params.posts_id}`).then(res => {
      console.log("Response is:", res.data)
      this.setState({
        post: res.data[0],
        postTitle: res.data[0].post_title,
        postSubtitle: res.data[0].blog_subtitle,
        postContent: res.data[0].post_content
      })
    }).catch(err => console.log(err))
  }

  clickUpdate(){

    let updatedPostObj = {
      postContent: this.state.postContent,
      postThumbnail: this.state.postThumbnail,
      postTitle: this.state.postTitle,
      year: this.state.postDateYear,
      month: this.state.postDateMonth,
      day: this.state.postDateDay,
      blogImage: this.state.postImg,
      blogSubtitle: this.state.postSubtitle
    }

    axios.put(`/api/posts/${this.props.match.params.posts_id}`, updatedPostObj).then(res => {
      axios.get(`/api/blogs/${this.props.match.params.posts_id}`).then(res => {
        console.log("Response is:", res.data)
        this.setState({
          post: res.data[0],
          postTitle: res.data[0].post_title,
          postSubtitle: res.data[0].blog_subtitle,
          postContent: res.data[0].post_content
        })
      }).catch(err => console.log(err))
    }).catch(err => console.log(err))
  }

  render(){

    console.log("State is: ", this.state.postContent)

    const fullPageStyle = { width: "100%" }

    return(
      <main className="adminWrapperBlog" style={ this.props.dropdownDisplayed ? null : fullPageStyle}>
        <div className="adminContentContainerBlog">
          <div className="addNewBlog">
            <p className="adminPageTitleBlog">Update Blog</p>
            <div className="topInputBlog">
              <input value={this.state.postTitle} className="titleBlog" onChange={this.handleTitleUpdate.bind(this)}/>
              <input className="captionInputBlog" value={this.state.postSubtitle} className="subtitleBlog" onChange={this.handleSubtitleUpdate.bind(this)}/>
            </div>

            <div className="overwriteBlog">
              <textarea value={this.state.postContent} onChange={this.handleContentUpdate.bind(this)} className="contentBlog" />
            </div>
          </div>

          <div className="addNewPicsBlog">
            <div className="addPicInnerBlog">
              <p className="picInnerTextBlog">Add Top Full Picture</p>
              <img src='https://i.imgur.com/FTLTf6u.png' />
              <div className="buttonBlog updateBtnBlog" onClick={this.clickUpdate.bind(this)}>UPDATE</div>
            </div>
            <div className="addPicInnerBlog">
              <p className="picInnerTextBlog">Add 2nd Full Picture</p>
              <img src='https://i.imgur.com/FTLTf6u.png' />
              <div className="buttonBlog cancelBtnBlog" onClick={this.clickCancel.bind(this)}>CANCEL</div>
            </div>
          </div>

        </div>

        <div className="saveCancelBtnContainerBlog">
          <div className="buttonBlog updateBtnBlogDesktop" onClick={this.clickUpdate.bind(this)}>UPDATE</div>
          <div className="buttonBlog cancelBtnBlogDesktop" onClick={this.clickCancel.bind(this)}>CANCEL</div>
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

export default connect(mapStateToProps)(AdminBlog_UPDATE);
