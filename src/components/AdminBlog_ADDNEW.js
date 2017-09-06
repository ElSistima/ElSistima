import React, {Component} from 'react';
import '../styles/adminBlogNew.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
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

class AdminBlog_ADDNEW extends Component{
  constructor(props){
    super(props);
      this.state={
        blogNewTitle: '',
        blogNewSubtitle: '',
        blogNewContent: '',
        picture1: 'https://i.imgur.com/FTLTf6u.png',
        picture2: 'https://i.imgur.com/FTLTf6u.png'
      }
  }

  componentDidMount(){
    axios.get('/api/admin')
      .then(res => {
        if(!res.data[0].admin_status){
          this.props.history.push('/')
        }
      })
  }

  trackTitleChange(event){
    this.setState({
      blogNewTitle: event.target.value
    })
  }

  onDrop1(accepted, rejected){
    uploadImage(accepted[0])
    .then(url => {
      this.setState({picture1: url})
  })
  }

  onDrop2(accepted, rejected){
    uploadImage(accepted[0])
    .then(url => {
      this.setState({picture2: url})
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

  clickSave(){
    var month = Math.floor(Math.random() * (10));
    var day = Math.floor(Math.random() * (1, 30));

    switch(month){
      case 1:
        return 'January';
      case 2:
        return 'February';
      case 3:
        return 'March';
      case 4:
        return 'April';
      case 5:
        return 'May';
      case 6:
        return 'June';
      case 7:
        return 'July';
      case 8:
        return 'August';
      case 9:
        return 'September';
      default:
        return 'September';
    }

    let newPostObject = {
      postContent: this.state.blogNewContent,
      postThumbnail: this.state.picture1,
      postTitle: this.state.blogNewTitle,
      year: 2017,
      month: month,
      day: `${day > 9 ? day : `0${day}`}`,
      blogImage: this.state.picture2,
      blogSubtitle: this.state.blogNewSubtitle
    }
    !this.state.blogNewTitle || !this.state.blogNewSubtitle || !this.state.blogNewContent ? alert("Be sure you have a title, subtitle, and blog content before saving your post.") : axios.post('/api/post',newPostObject).then(res => {
       console.log(res)
       this.setState({
         blogNewTitle: '',
         blogNewSubtitle: '',
         blogNewContent: '',
         picture1: 'https://i.imgur.com/FTLTf6u.png',
         picture2: 'https://i.imgur.com/FTLTf6u.png'
       })
    }).catch(err => console.log(err));
  }

  clickCancel(){
    alert("Are you sure you want to cancel changes?")
    this.setState({
      blogNewTitle: '',
      blogNewSubtitle: '',
      blogNewContent: '',
      picture1: 'https://i.imgur.com/FTLTf6u.png',
      picture2: 'https://i.imgur.com/FTLTf6u.png'
    })
  }

  render(){
    console.log("New blog props is: ", this.props)
    const fullPageStyle = { width: "100%" }
    //backgroundImage
    const placeholder1 = {
      backgroundImage: `url('${this.state.picture1}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
    const placeholder2 = {
      backgroundImage: `url(${this.state.picture2})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }

    return(
      <main className="adminWrapperBlogNew" style={ this.props.dropdownDisplayed ? null : fullPageStyle}>
        <div className="adminContentContainerBlogNew">
          <div className="addNewBlogNew">
            <p className="adminPageTitleBlogNew">Create New Blog Post</p>
            <div className="topInputBlogNew">
              <input placeholder="Title" value={this.state.blogNewTitle} className="titleBlogNew" onChange={this.trackTitleChange.bind(this)}/>
              <input placeholder="Subtitle" value={this.state.blogNewSubtitle} className="subtitleBlogNew" onChange={this.trackSubtitleChange.bind(this)}/>
            </div>

            <div className="overwriteBlogNew">
              <textarea placeholder="Blog content here" className="contentBlogNew" value={this.state.blogNewContent} onChange={this.trackContentChange.bind(this)}></textarea>
            </div>
          </div>

          <div className="addNewPicsBlogNew">
            <div className="addPicInnerBlogNew">
              <p className="picInnerTextBlogNew">Upload Thumbnail Image</p>
              <Dropzone
                className="blogDropzone"
                style={placeholder1}
                onDrop={(accepted, rejected) => this.onDrop1(accepted, rejected)}></Dropzone>

              <div className="buttonBlogNew updateBtnBlogNew" onClick={this.clickSave.bind(this)}>SAVE</div>


            </div>
            <div className="addPicInnerBlogNew">
              <p className="picInnerTextBlogNew">Upload Banner Image</p>
              <Dropzone
                className="blogDropzone"
                style={placeholder2}
                onDrop={(accepted, rejected) => this.onDrop2(accepted, rejected)}></Dropzone>
              <div className="buttonBlogNew cancelBtnBlogNew" onClick={this.clickCancel.bind(this)}>CANCEL</div>
            </div>
          </div>

        </div>

        <div className="saveCancelBtnContainerBlogNew">
          <div className="buttonBlogNew updateBtnBlogNewDesktop" onClick={this.clickSave.bind(this)}>SAVE</div>
          <div className="buttonBlogNew cancelBtnBlogNewDesktop" onClick={this.clickCancel.bind(this)}>CANCEL</div>
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
