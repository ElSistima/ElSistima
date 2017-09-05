import React, {Component} from 'react';
import './../styles/blogCard.css';
import {Link} from 'react-router-dom';

export default class BlogCardRecent extends Component{
  constructor(props){
    super(props);
      this.state={
        subtitle: this.props.card.blog_subtitle,
        subtitleSubstr: ''
      }
  }

  componentDidMount(){
      this.setState({
        subtitleSubstr: String(this.props.card.blog_subtitle).length
      })
  }

  render(){

    let imgStyle = {backgroundImage: `url("${this.props.card.blog_image}")`, backgroundSize: "cover", backgroundPosition: "center"}

    let subtitleLimit = this.state.subtitleSubstr > 15 ? `${String(this.state.subtitle).substring(0, 14)}...` : this.props.card.blog_subtitle

    console.log(this.state.subtitleSubstr)

    return(
      <main className="blogCardWrapper">
        <div className="blogCardContent">
          <section className="blogCardTop">
            <div className="blogCardTopImg" style={imgStyle}>
            </div>
          </section>
          <section className="blogCardBottom">
            <div className="blogCardTitleDate">
              <p className="blogCardTitle">{this.props.card.post_title}<span className="cardTitlePipe">|</span></p>
              <p className="blogCardDate">{this.props.card.date_month} {this.props.card.date_day}, {this.props.card.date_year}</p>
              <p className="blogCardSubtitle">
              <span className="smartphoneSubtitle">{this.props.card.blog_subtitle}</span>
              <span className="tabletSubtitle">{subtitleLimit}</span>
              <span className="desktopSubtitle">{this.props.card.blog_subtitle}</span>
              </p>
            </div>
            <div className="blogCardAuthorDetails">
              <div className="blogCardAuthorPic">
                <img src={this.props.card.user_profile_pic} alt="author thumbnail"/>
              </div>
              <p className="blogCardAuthorName">{this.props.card.user_name}</p>
            </div>
            <Link to={`/blog/${this.props.card.posts_id}`}>
            <div className="blogCardShareCircle"><i className="fa fa-angle-right" aria-hidden="true"></i></div>
            </Link>
          </section>
        </div>
      </main>
    )
  }
}
