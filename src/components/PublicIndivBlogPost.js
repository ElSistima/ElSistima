import React, {Component} from 'react';
import './../styles/publicIndivBlogPost.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class PublicIndivBlogPost extends Component {
  constructor(props){
    super(props);
    this.state={
      indivPostTitle: null,
      indivPostSubtitle: null,
      indivPostContent: null,
      indivPostImg: null,
      postDateMonth: null,
      postDateDay: null,
      postDateYear: null,
      postThumbnail: null,
      postAuthor: null,
      postAuthorPic: null
    }

  }

  componentDidMount(){
    axios.get(`/api/blogs/${this.props.match.params.post_id}`).then(res => {
      console.log("Response is:", res.data[0])
      this.setState({
        indivPostTitle: res.data[0].post_title,
        indivPostSubtitle: res.data[0].blog_subtitle,
        indivPostContent: res.data[0].post_content,
        indivPostImg: res.data[0].blog_image,
        postDateMonth: res.data[0].date_month,
        postDateDay: res.data[0].date_day,
        postDateYear: res.data[0].date_year,
        postThumbnail: res.data[0].post_thumbnail,
        postAuthor: res.data[0].user_name,
        postAuthorPic: res.data[0].user_profile_pic
      })
    }).catch(err => console.log(err))
  }

  render(){

    console.log(this.state)

    return(
      <main className="blogPostWrapper">
        <div className="blogPostContent">
          <div className="blogAuthorDetails">
            <div className="blogAuthorPic">
              <img src={this.state.postAuthorPic} alt="Author picture"/>
            </div>
            <div className="blogAuthorName">
            <p>{this.state.postAuthor}</p>
            </div>
          </div>
          <div className="blogPostTopImage">
            <img src={this.state.indivPostImg} />
          </div>

          <div className="blogDetails">
            <div className="titleDate">
              <p>{this.state.indivPostTitle}   <span className="blogpostTitlePipe">|</span>   <span className="blogDate">{this.state.postDateMonth} {this.state.postDateDay}, {this.state.postDateYear}</span></p>
            </div>
            <p className="blogSubtitle">{this.state.indivPostSubtitle}</p>
          </div>
        <p className="blogBodyContent">{this.state.indivPostContent}</p>
        <div className="blogPostFooter">
        <div className="blogPlaceholderDiv"></div>
          <div className="blogEndLogo"></div>
          <div className="returnToBlogs">
          <Link to ="/blog">
            <p>{"<   "}Return to Blogs</p>
          </Link>
          </div>
        </div>
        </div>

      </main>
    )
  }

}
