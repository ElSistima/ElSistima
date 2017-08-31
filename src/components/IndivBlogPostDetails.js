import React, {Component} from 'react';
import './../styles/indivBlogPostDetails.css';

export default class IndivBlogPostDetails extends Component {
  constructor(props){
    super(props);
      this.state ={
        itemChecked: false
      }
  }

  markChecked(){
    this.setState({
      itemChecked: !this.state.itemChecked
    })
  }


  render(){

    const checkedBoxStyle = { backgroundColor: "#5182EA", borderColor: "#5182EA"}

    const itemRowSelectedStyle = { backgroundColor: "#E8E8E8" }

    return(
      <main className="postDetailsWrapper" style={this.state.itemChecked ? itemRowSelectedStyle : null}>
        <div className="blogDetailsItem1">
          <div className="checkbox" onClick={this.markChecked.bind(this)} style={this.state.itemChecked || this.props.checkAll ? checkedBoxStyle : null}><i className="fa fa-check fa-fw whiteCheck" aria-hidden="true"></i></div>
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
          <p><i className="fa fa-trash" aria-hidden="true"></i></p>
        </div>
      </main>
    )
  }
}
