import React, {Component} from 'react';
import '../styles/AdminBlog_ADDNEW.css';
import '../styles/adminBlogUpdate.css';
import axios from 'axios';
import {connect} from 'react-redux';

class AdminBlog_UPDATE extends Component{
  constructor(props){
    super(props);
      this.state={
        post: null,
        postTitle: '',
        postSubtitle: '',
        postContent: ''
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
        postContent: res.data[0].post_content
      })
    }).catch(err => console.log(err))
  }




  render(){
    console.log("State post is: ", this.state.post)
    console.log("State post title is: ", this.state.postTitle)


    const fullPageStyle = { width: "100%" }

    return(
      <main className="AdminBlog_ADDNEW_Main" style={ this.props.dropdownDisplayed ? null : fullPageStyle}>
      <div className="add_new_blog">
        <div className="anb_headerText">Update Blog</div>
        <div className="anb_topInput">
          <input value={this.state.postTitle} className="blogTitle"/>
          <input className="captionInput" value={this.state.postSubtitle} className="blogSubtitle"/>
        </div>

        <div className="maintxt_Content anb_overwrite">
          <textarea value={this.state.postContent} className="blogContent"></textarea>
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
