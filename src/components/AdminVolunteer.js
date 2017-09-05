import React, {Component} from 'react';
import './../styles/adminEditor.css';
import axios from 'axios';
import IndivVolunteerDetails from './IndivVolunteerDetails';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class AdminVolunteer extends Component{
  constructor(props){
    super(props);
      this.state ={
        fetchedVolunteers: [],
        checkAllBoxes: false,
        amountChecked: 0
      }
  }

  componentDidMount(){
    axios.get('/api/volunteers').then(res => {
      this.setState({
        fetchedVolunteers: res.data
      })
    }).catch(err => console.log(err));
  }

  reloadVolunteers(){
    axios.get('/api/volunteers').then(res => {
      this.setState({
        fetchedVolunteers: res.data
      })
    }).catch(err => console.log(err));
  }

  markAllChecked(){
    this.setState({
      checkAllBoxes: !this.state.checkAllBoxes,
      amountChecked: this.state.fetchedPosts.length
    })
  }

  render(){
    console.log(this.state.fetchedVolunteers)

    const checkedBoxStyle = { backgroundColor: "#5182EA", borderColor: "#5182EA"}

    const itemRowSelectedStyle = { backgroundColor: "#E8E8E8" }

    const fullPageStyle = { width: "100%" }

    const allVolunteers = this.state.fetchedVolunteers.map((person, i) => {
      return (
      <IndivVolunteerDetails key={i} index={i} person={person} checkAll={this.state.checkAllBoxes} reloadVolunteers={this.reloadVolunteers.bind(this)} />
    )
  })

    return(
      <main className="adminWrapper" style={ this.props.dropdownDisplayed ? null : fullPageStyle}>
        <section className="adminContentContainer">
          <div className="adminPageHeaderContainer">
            <p className="adminPageHeader">Current Volunteers</p>
            <Link to="/admin/volunteer/addNew">
              <i className="fa fa-plus-square" aria-hidden="true"></i>
            </Link>
          </div>
          <div className="itemsSelected">
            <p>ITEMS SELECTED TEXT GOES HERE</p>
          </div>
          <div className="columnTitles postDetailsWrapper" style={this.state.checkAllBoxes ? itemRowSelectedStyle : null}>
            <div className="blogDetailsItem1">
              <div className="checkbox" onClick={this.markAllChecked.bind(this)} style={this.state.checkAllBoxes ? checkedBoxStyle : null}><i className="fa fa-check fa-fw whiteCheck" aria-hidden="true"></i></div>
            </div>
            <div className="blogDetailsItem2">
              <p>Name</p>
            </div>
            <div className="blogDetailsItem3">
              <p>Email Address</p>
            </div>
            <div className="blogDetailsItem4">
              <p>Job</p>
            </div>
            <div className="blogDetailsItem5">
              <p>Actions</p>
            </div>
          </div>
          {allVolunteers}
        </section>
      </main>
    )
  }
}

function mapStateToProps(state){
  return{
    dropdownDisplayed: state.clicked
  }
}

export default connect(mapStateToProps)(AdminVolunteer);
