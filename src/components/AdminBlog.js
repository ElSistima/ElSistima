import React, {Component} from 'react';
import axios from 'axios';

export default class AdminBlog extends Component {
  constructor(props){
    super(props);
      this.state ={
        fetchedPosts: []
      }
  }

componentDidMount(){
  axios.get('http://localhost:8080/api/blogs').then(res => {
    this.setState({
      fetchedPosts: res.data
    })
  })
.catch(err => console.log("Error is: ", err))
}

  render(){

    console.log("FetchedPosts Array is :", this.state.fetchedPosts)

    return(
      <main className="adminBlogWrapper">
        <section className="adminContentContainer">
          <div className="adminPageHeaderContainer">
            <p className="adminPageHeader">Current Blog Posts</p>
          </div>
        </section>
      </main>
    )
  }
}
