import React, {Component} from 'react';
import axios from 'axios';
import './../styles/indivBlogPostDetails.css';
import {Link} from 'react-router-dom';

export default class IndivPerformanceDetails extends Component {
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

  deletePerformance(){
    axios.delete(`/api/events/${this.props.performance.id}`).then(res => this.props.reloadPerformances()).catch(err => console.log(err))
  }


  render(){

    console.log("Props, dude: ", this.props)

    const checkedBoxStyle = { backgroundColor: "#5182EA", borderColor: "#5182EA"}

    const itemRowSelectedStyle = { backgroundColor: "#E8E8E8" }

    const daysFromDB = this.props.performance.date_days;

    const daysDigits = daysFromDB < 10 ? '0' + daysFromDB : daysFromDB;

    const daysEndFromDB = this.props.performance.date_days;

    const daysEndDigits = daysEndFromDB < 10 ? '0' + daysEndFromDB : daysEndFromDB;

    return(
      <main className="postDetailsWrapper" style={this.state.itemChecked ? itemRowSelectedStyle : null}>
        <div className="blogDetailsItem1">
          <div className="checkbox" onClick={this.markChecked.bind(this)} style={this.state.itemChecked ? checkedBoxStyle : null}><i className="fa fa-check fa-fw whiteCheck" aria-hidden="true"></i></div>
        </div>
        <div className="blogDetailsItem2">
          <p>{this.props.performance.title}</p>
        </div>
        <div className="blogDetailsItem3">
          <p>0{this.props.performance.date_month_number}/{daysDigits}/{this.props.performance.date_year}</p>
        </div>
        <div className="blogDetailsItem4">
          <p>{this.props.performance.date_month_end_num}/{daysEndDigits}/{this.props.performance.date_year_end}</p>
        </div>
        <div className="blogDetailsItem5">
          <Link to={"/admin"}>
            <p><i className="fa fa-pencil" aria-hidden="true"></i></p>
          </Link>
          <p><i className="fa fa-trash" aria-hidden="true" onClick={this.deletePerformance.bind(this)}></i></p>
        </div>
      </main>
    )
  }
}
