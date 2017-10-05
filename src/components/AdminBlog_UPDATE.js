import React, {Component} from 'react';
import './../styles/AdminBlogEditor.css';
import axios from 'axios';
import {connect} from 'react-redux';
import Dropzone from 'react-dropzone';


const uploadImage = (file) => {
  return axios.post("/api/getSignedURL", {
    filename: file.name,
    filetype: file.type
  })
  .then(res => {
    let options = {
      headers: {
        'Content-Type': file.type
      }
    }
    return axios.put(res.data.url, file, options)
    .then(res => {
       return res.config.url.match(/.*\?/)[0].slice(0,-1)
    })
  })
}

class AdminBlog_UPDATE extends Component{
  constructor(props){
    super(props);
      this.state={
        postTitle: '',
        postSubtitle: '',
        postContent: '',
        postImg: 'https://i.imgur.com/FTLTf6u.png',
        postThumbnail: 'https://i.imgur.com/FTLTf6u.png',
        postDateMonth: null,
        postDateDay: null,
        postDateYear: null,
      }
  }

  componentDidMount(){

    axios.get('/api/admin')
      .then(res => {
        if(!res.data[0].admin_status){
          this.props.history.push('/')
        }
      })
    console.log("Param is: ", this.props.match.params.posts_id)

    axios.get(`/api/blogs/${this.props.match.params.posts_id}`).then(res => {
      console.log("Update blog res.data is:", res.data)
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

  onDrop1(accepted, rejected){
    uploadImage(accepted[0])
    .then(url => {
      this.setState({postThumbnail: url})
  })
  }

  onDrop2(accepted, rejected){
    uploadImage(accepted[0])
    .then(url => {
      this.setState({postImg: url})
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
      this.props.history.push("/admin/blog")
    }).catch(err => console.log(err))
  }

  clickUpdate(){
    let updatedPostObj = {
      postContent: this.state.postContent,
      postTitle: this.state.postTitle,
      postSubTitle: this.state.postSubtitle
    }
  !this.state.postTitle || !this.state.postSubtitle || !this.state.postContent ? alert("Be sure you have a title, subtitle, and blog content before updating your post.") :
    axios.put(`/api/posts/${this.props.match.params.posts_id}`, updatedPostObj).then(res => {
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
        alert("Blog Post Updated.")
        this.props.history.push("/admin/blog")
      }).catch(err => console.log(err))
    }).catch(err => console.log(err))
  }

  render(){
    console.log(this.state)

    const fullPageStyle = { width: "100%" }

    const placeholder1 = {
      backgroundImage: `url('${this.state.postThumbnail}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
    const placeholder2 = {
      backgroundImage: `url(${this.state.postImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }

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
              <p className="picInnerTextBlog">Upload Thumbnail Image</p>
              <Dropzone
                className="blogDropzone"
                style={placeholder1}
                onDrop={(accepted, rejected) => this.onDrop1(accepted, rejected)}></Dropzone>
              <div className="buttonBlog updateBtnBlog" onClick={this.clickUpdate.bind(this)}>UPDATE</div>
            </div>
            <div className="addPicInnerBlog">
              <p className="picInnerTextBlog">Upload Banner Image</p>
              <Dropzone
                className="blogDropzone"
                style={placeholder2}
                onDrop={(accepted, rejected) => this.onDrop2(accepted, rejected)}></Dropzone>
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
