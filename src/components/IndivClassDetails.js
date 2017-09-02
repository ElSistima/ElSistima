import React, {Component} from 'react';
import axios from 'axios';
import './../styles/indivBlogPostDetails.css';
import {Link} from 'react-router-dom';

export default class IndivClassDetails extends Component {
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
    console.log("IndivClass Component Mounted")
    this.setState({
      itemChecked: nextProps.checkAll
    })
  }

  deleteClass(){
    axios.delete(`/api/events/${this.props.classObj.id}`).then(res => this.props.reloadClasses()).catch(err => console.log(err))
  }


  render(){

    console.log("Props, dude: ", this.props)

    const checkedBoxStyle = { backgroundColor: "#5182EA", borderColor: "#5182EA"}

    const itemRowSelectedStyle = { backgroundColor: "#E8E8E8" }

    const monthFromDB = this.props.classObj.date_month_number;

    const monthDigits = monthFromDB < 10 ? '0' + monthFromDB : monthFromDB;

    const monthEndFromDB = this.props.classObj.date_month_end_number;

    const monthEndDigits = monthFromDB < 10 ? '0' + monthFromDB : monthFromDB;

    const daysFromDB = this.props.classObj.date_days;

    const daysDigits = daysFromDB < 10 ? '0' + daysFromDB : daysFromDB;

    const daysEndFromDB = this.props.classObj.date_days_end;

    const daysEndDigits = daysEndFromDB < 10 ? '0' + daysEndFromDB : daysEndFromDB;


    return(
      <main className="postDetailsWrapper" style={this.state.itemChecked ? itemRowSelectedStyle : null}>
        <div className="blogDetailsItem1">
          <div className="checkbox" onClick={this.markChecked.bind(this)} style={this.state.itemChecked ? checkedBoxStyle : null}><i className="fa fa-check fa-fw whiteCheck" aria-hidden="true"></i></div>
        </div>
        <div className="blogDetailsItem2">
          <p>{this.props.classObj.title}</p>
        </div>
        <div className="blogDetailsItem3">
          <p>{monthDigits}/{daysDigits}/{this.props.classObj.date_year}</p>
        </div>
        <div className="blogDetailsItem4">
          <p>{monthEndDigits}/{daysEndDigits}/{this.props.classObj.date_year_end}</p>
        </div>
        <div className="blogDetailsItem5">
          <Link to={"/admin"}>
            <p><i className="fa fa-pencil" aria-hidden="true"></i></p>
          </Link>
          <p><i className="fa fa-trash" aria-hidden="true" onClick={this.deleteClass.bind(this)}></i></p>
        </div>
      </main>
    )
  }
}
