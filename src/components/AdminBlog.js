import React, {Component} from 'react';
import axios from 'axios';

export default class AdminBlog extends Component {
  constructor(props){
    super(props);
  }

componentDidMount(){
  axios.get('http://localhost:8080/api/blogs').then(res => console.log("DB Response is: ", res.data))
.catch(err => console.log("Error is: ", err))
}

  render(){
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
