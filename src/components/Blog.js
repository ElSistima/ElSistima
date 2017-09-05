import React, {Component} from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';
import BlogCardRecent from './BlogCardRecent';
import './../styles/blog.css';

export default class Blog extends Component{
  constructor(props){
    super(props);
      this.state={
        allBlogPosts: [],
        recentBlogPosts: []
      }
  }

  componentDidMount(){
    axios.get('/api/blogs').then(res => {
      return (
        this.setState({
          allBlogPosts: res.data.slice(3),
          recentBlogPosts: res.data.slice(0, 3)
        })
      )
    }).catch(err => console.log(err))
  }

  render(){

    const recentBlogCards = this.state.recentBlogPosts.map((card, i) => {
      return (
        <BlogCardRecent key={i} index={i} card={card}/>
    )}
  )

    const allBlogCards = this.state.allBlogPosts.map((card, i) => {
      return (
        <BlogCard key={i} index={i} card={card}/>
    )}
  )

    return (
      <main className="publicBlogWrapper">
        <div className="publicBlogContent">



        <p className="pageTitle recentHeader">Recent Posts</p>
        <div className="blogCardContainer">
        {recentBlogCards}
        </div>

        <div className="blogSectionDivider"><i className="fa fa-music blogNote" aria-hidden="true"></i></div>

        <div className="blogCardContainer">
        {allBlogCards}
        </div>
        </div>
      </main>
    )
  }
}
