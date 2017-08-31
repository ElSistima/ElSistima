import React, {Component} from 'react';
import axios from 'axios';
import './../styles/indivBlogPostDetails.css';
import {Link} from 'react-router-dom';

export default class IndivBlogPostDetails extends Component {
  constructor(props){
    super(props);
      this.state ={
        itemChecked: false,
        checkedQty: 0
      }
  }

  markChecked(){
    this.setState({
      itemChecked: !this.state.itemChecked,
      checkedQty: this.state.checkedQty == 0 ? 1 : 0
    })
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      itemChecked: nextProps.checkAll
    })
  }

  deletePost(){
    axios.delete(`/api/posts/${this.props.post.posts_id}`).then(res => this.props.reloadPosts()).catch(err => console.log(err))
  }

  render(){

    console.log("Item checked :", this.state.itemChecked)

    const checkedBoxStyle = { backgroundColor: "#5182EA", borderColor: "#5182EA"}

    const itemRowSelectedStyle = { backgroundColor: "#E8E8E8" }

    return(
      <main className="postDetailsWrapper" style={this.state.itemChecked ? itemRowSelectedStyle : null}>
        <div className="blogDetailsItem1">
          <div className="checkbox" onClick={this.markChecked.bind(this)} style={this.state.itemChecked ? checkedBoxStyle : null}><i className="fa fa-check fa-fw whiteCheck" aria-hidden="true"></i></div>
        </div>
        <div className="blogDetailsItem2">
          <p>{this.props.post.post_title}</p>
        </div>
        <div className="blogDetailsItem3">
          <p>{this.props.post.date_month_number}/{this.props.post.date_day}/{this.props.post.date_year}</p>
        </div>
        <div className="blogDetailsItem4">
          <p>{this.props.post.user_name}</p>
        </div>
        <div className="blogDetailsItem5">
        
          <p><i className="fa fa-pencil" aria-hidden="true"></i></p>
          <p><i className="fa fa-trash" aria-hidden="true" onClick={this.deletePost.bind(this)}></i></p>
        </div>
      </main>
    )
  }
}
