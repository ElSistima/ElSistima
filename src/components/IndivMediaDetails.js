import React, {Component} from 'react';
import axios from 'axios';
import './../styles/indivBlogPostDetails.css';
import {Link} from 'react-router-dom';

export default class IndivMediaDetails extends Component {
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
      checkedQty: this.state.checkedQty === 0 ? 1 : 0
    })
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      itemChecked: nextProps.checkAll
    })
  }

  deleteMedia(){
    axios.delete(`/api/media/${this.props.media.id}`).then(res => this.props.reloadMedia()).catch(err => console.log(err))
  }


  render(){

    console.log("Props, dude: ", this.props)

    const checkedBoxStyle = { backgroundColor: "#5182EA", borderColor: "#5182EA"}

    const itemRowSelectedStyle = { backgroundColor: "#E8E8E8" }

    const date = this.props.media.post_time;
    let year = date.substr(0, 4);
    let month = date.substr(4, 2);
    let day = date.substr(6, 2);


    return(
      <main className="postDetailsWrapper" style={this.state.itemChecked ? itemRowSelectedStyle : null}>
        <div className="blogDetailsItem1">
          <div className="checkbox" onClick={this.markChecked.bind(this)} style={this.state.itemChecked ? checkedBoxStyle : null}><i className="fa fa-check fa-fw whiteCheck" aria-hidden="true"></i></div>
        </div>
        <div className="blogDetailsItem2">

          <p>{this.props.media.is_picture ? 'Image' : 'Video'}</p>

        </div>
        <div className="blogDetailsItem3">
          <p>{month}/{day}/{year}</p>
        </div>
        <div className="blogDetailsItem4">
          <p>{this.props.media.caption}</p>
        </div>
        <div className="blogDetailsItem5">

          <Link to={"/admin/media/update/" + this.props.media.id}>
            <p><i className="fa fa-pencil" aria-hidden="true"></i></p>
          </Link>

          <p><i className="fa fa-trash" aria-hidden="true" onClick={this.deleteMedia.bind(this)}></i></p>
        </div>
      </main>
    )
  }
}
