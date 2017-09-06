import React, {Component} from 'react';
import '../styles/adminMediaNew.css';
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


class AdminMedia_ADDNEW extends Component{
  constructor(props){
    super(props);
      this.state={
        mediaTitle: '',
        mediaCategoryBool: true,
        mediaCategory: true,
        mediaDescription: '',
        mediaFile: 'https://i.imgur.com/FTLTf6u.png'
      }
  }

  onDrop1(accepted, rejected){
    uploadImage(accepted[0])
    .then(url => {
      this.setState({mediaFile: url})
  })
  }

  trackTitleChange(event){
    this.setState({
      mediaTitle: event.target.value
    })
  }

  trackCategoryChange(event){
    this.setState({
      mediaCategoryBool: Boolean(event.target.value),
      mediaCategory: event.target.value
    })
  }

  trackDescriptionChange(event){
    this.setState({
      mediaDescription: event.target.value
    })
  }

  clickSave(){
    var month = Math.floor(Math.random() * (13));
    var day = Math.floor(Math.random() * (1, 30));

    let newMediaObject ={
      media_url: this.state.mediaFile,
	    is_picture: this.state.mediaCategoryBool,
	    description: this.state.mediaDescription,
	    post_time: parseInt(`2017${month > 9 ? month : `0${month}`}${day > 9 ? day : `0${day}`}`, 0)
    }
    !this.state.mediaFile || !this.state.mediaCategoryBool || !this.state.mediaDescription ? alert("Be sure you have a title, selected category, and description before saving your media file.") :
    axios.post('/api/media', newMediaObject).then(res => {
      console.log(res)
      this.setState({
        mediaTitle: '',
        mediaCategoryBool: true,
        mediaCategory: true,
        mediaDescription: '',
        mediaFile: 'https://i.imgur.com/FTLTf6u.png'
      })
    }).catch(err => console.log(err))
  }

  clickCancel(){
    this.setState({
      mediaTitle: '',
      mediaCategoryBool: true,
      mediaCategory: true,
      mediaDescription: '',
      mediaFile: 'https://i.imgur.com/FTLTf6u.png'
    })
  }

  render(){
    const fullPageStyle = { width: "100%" }

    const placeholder = {
      backgroundImage: `url('${this.state.mediaFile}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }

    return(
      <main className="adminWrapperMediaNew" style={ this.props.dropdownDisplayed ? null : fullPageStyle}>
        <div className="adminContentContainerMediaNew">
          <div className="addNewMediaNew">
            <p className="adminPageTitleMediaNew">Add New Media</p>
            <div className="topInputMediaNew">
              <input placeholder="Title" value={this.state.mediaTitle} className="titleMediaNew" onChange={this.trackTitleChange.bind(this)}/>

              <div className="mediaSelectContainer">
                <select className="mediaTypeSelect" value={this.state.mediaCategory} onChange={this.trackCategoryChange.bind(this)}>
                  <option value={true}>Image</option>
                  <option value={''}>Video</option>
                </select>
              </div>
            </div>

            <div className="midInputMediaNew">
              <input placeholder="Description" className="contentMediaNew" value={this.state.mediaDescription} onChange={this.trackDescriptionChange.bind(this)}></input>
            </div>

            <div className="bottomInputMediaNew">
            <Dropzone
              className="mediaDropzone"
              style={placeholder}
              onDrop={(accepted, rejected) => this.onDrop1(accepted, rejected)}></Dropzone>
            </div>
          </div>
        </div>


        <div className="saveCancelBtnContainerMediaNew">
          <div className="updateBtnMediaNewDesktop" onClick={this.clickSave.bind(this)}>SAVE</div>
          <div className="buttonMediaNew cancelBtnMediaNewDesktop" onClick={this.clickCancel.bind(this)}>CANCEL</div>
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
