import React, {Component} from 'react';
import './../styles/blogCard.css';
import {Link} from 'react-router-dom';

export default class BlogCard extends Component{
  constructor(props){
    super(props);
  }



  render(){
    return(
      <main className="blogCardWrapper">
        <div className="blogCardContent">
          <section className="blogCardTop">
            <div className="blogCardTopImg">
              <img src={this.props.card.blog_image} />
            </div>
          </section>
          <section className="blogCardBottom">
            <div className="blogCardTitleDate">
              <p className="blogCardTitle">{this.props.card.post_title}<span className="cardTitlePipe">|</span></p>
              <p className="blogCardDate">{this.props.card.date_month} {this.props.card.date_day}, {this.props.card.date_year}</p>
              <p className="blogCardSubtitle">
              {this.props.card.blog_subtitle}
              </p>
            </div>
            <div className="blogCardAuthorDetails">
              <div className="blogCardAuthorPic">
                <img src={this.props.card.user_profile_pic} />
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
