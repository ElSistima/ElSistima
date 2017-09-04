import React, {Component} from 'react';
import AdminVolunteer_UPDATE from './AdminVolunteer_UPDATE';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class IndivVolunteerDetails extends Component{
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

  deleteVolunteer(){
    axios.delete(`/api/volunteers/${this.props.person.vol_id}`).then(res => this.props.reloadVolunteers()).catch(err => console.log(err))
  }

  render(){

    console.log("Props, dude: ", this.props)

    const checkedBoxStyle = { backgroundColor: "#5182EA", borderColor: "#5182EA"}

    const itemRowSelectedStyle = { backgroundColor: "#E8E8E8" }

    return(
      <main className="postDetailsWrapper" style={this.state.itemChecked ? itemRowSelectedStyle : null}>
        <div className="blogDetailsItem1">
          <div className="checkbox" onClick={this.markChecked.bind(this)} style={this.state.itemChecked ? checkedBoxStyle : null}><i className="fa fa-check fa-fw whiteCheck" aria-hidden="true"></i></div>
        </div>
        <div className="blogDetailsItem2">
          <p>{this.props.person.name}</p>
        </div>
        <div className="blogDetailsItem3">
          <p>
          <Link to={`mailto:${this.props.person.email}`}>
          {this.props.person.email}
          </Link>
          </p>
        </div>
        <div className="blogDetailsItem4">
          <p>{this.props.person.title}</p>
        </div>
        <div className="blogDetailsItem5">

        <Link to={`/admin/volunteer/update/${this.props.person.vol_id}`}>
          <p><i className="fa fa-pencil" aria-hidden="true"></i></p>
        </Link>
          <p><i className="fa fa-trash" aria-hidden="true" onClick={this.deleteVolunteer.bind(this)}></i></p>
        </div>
      </main>
    )
  }
}
