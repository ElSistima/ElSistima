import React, {Component} from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';
import './../styles/blog.css';

export default class Blog extends Component{
  constructor(props){
    super(props);
      this.state={
        allBlogPosts: []
      }
  }

  componentDidMount(){
    axios.get('/api/blogs').then(res => {
      return (
        this.setState({
          allBlogPosts: res.data
        })
      )
    }).catch(err => console.log(err))
  }

  render(){
    console.log(this.state.allBlogPosts)

  const allBlogCards = this.state.allBlogPosts.map((card, i) => {
    return (
      <BlogCard key={i} index={i} card={card}/>
    )}
  )

    return (
      <main className="publicBlogWrapper">
        <div className="publicBlogContent">
        <p className="pageTitle">El Sistema Blog</p>
        {allBlogCards}
        </div>
      </main>
    )
  }
}
