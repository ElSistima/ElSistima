import React, {Component} from 'react';
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
      <main>
        <p>{this.state.indivPostTitle}</p>
        <p>{this.state.indivPostSubtitle}</p>
        <p>{this.state.indivPostContent}</p>

      </main>
    )
  }

}
