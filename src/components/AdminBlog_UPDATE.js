import React, {Component} from 'react';
import '../styles/AdminBlog_ADDNEW.css';
import axios from 'axios';
import {connect} from 'react-redux';

class AdminBlog_UPDATE extends Component{
  constructor(props){
    super(props);
      this.state={
        post: null
      }
  }


  componentDidMount(){
    console.log("Param is: ", this.props.match.params.posts_id)
    axios.get(`/api/blogs/${this.props.match.params.posts_id}`).then(res => {
      console.log("Response is:", res.data)
      this.setState({
        post: res.data[0]
      })
    }).catch(err => console.log(err))
  }



  render(){
    console.log("State post is: ", this.state.post)

    const fullPageStyle = { width: "100%" }

    return(
      <main className="AdminBlog_ADDNEW_Main" style={ this.props.dropdownDisplayed ? null : fullPageStyle}>
      <div className="add_new_blog">
        <div className="anb_headerText">Update Blog</div>
        <div className="anb_topInput">
          <input placeholder="title"/>
          <input className="captionInput" placeholder="Caption"/>
        </div>

        <div className="maintxt_Content anb_overwrite">
          <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
        </div>
      </div>



      <div className="add_new_pics">
        <div className="add_pic_inner">
          <div>Add Top Full Picture</div>
          <img src='https://i.imgur.com/FTLTf6u.png' />
          <div className="pblg save_btn">UPDATE</div>
        </div>
        <div className="add_pic_inner">
          <div>Add 2nd Full Picture</div>
          <img src='https://i.imgur.com/FTLTf6u.png' />
          <div className="pblg cancel_btn">CANCEL</div>
        </div>
      </div>

      <div className="web_btn">
        <div className="singlebtn web_save">UPDATE</div>
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

export default connect(mapStateToProps)(AdminBlog_UPDATE);
