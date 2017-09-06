import React, {Component} from 'react';
import '../styles/adminMediaNew.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Dropzone from 'react-dropzone';


const uploadImage = (file) => {
  return axios.post("http://localhost:80/api/getSignedURL", {
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
        mediaCategory: '',
        mediaDescription: '',
        picture: 'https://i.imgur.com/FTLTf6u.png'
      }
  }

  onDrop1(accepted, rejected){
    uploadImage(accepted[0])
    .then(url => {
      this.setState({picture: url})
  })
  }

  render(){

    const fullPageStyle = { width: "100%" }

    const placeholder = {
      backgroundImage: `url('${this.state.picture}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }

    return(
      <main className="adminWrapperMediaNew" style={ this.props.dropdownDisplayed ? null : fullPageStyle}>
        <div className="adminContentContainerMediaNew">
          <div className="addNewMediaNew">
            <p className="adminPageTitleMediaNew">Add New Media</p>
            <div className="topInputMediaNew">
              <input placeholder="Title" value={this.state.mediaTitle} className="titleMediaNew" />

              <div className="mediaSelectContainer">
                <select className="mediaTypeSelect">
                  <option value="Image">Image</option>
                  <option value="Video">Video</option>
                </select>
              </div>
            </div>

            <div className="midInputMediaNew">
              <input placeholder="Description" className="contentMediaNew" value={this.state.mediaDescription}></input>
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
          <div className="updateBtnMediaNewDesktop">SAVE</div>
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
