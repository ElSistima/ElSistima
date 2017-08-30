import React, {Component} from 'react';

export default class IndivBlogPostDetails extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <main className="postDetailsWrapper">
        <h1>{this.props.post.post_title}</h1>
      </main>
    )
  }
}
