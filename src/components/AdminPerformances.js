import React, {Component} from 'react';
import './../styles/adminEditor.css';
import axios from 'axios';
import IndivPerformanceDetails from './IndivPerformanceDetails';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class AdminPerformances extends Component {
  constructor(props){
    super(props);
      this.state ={
        fetchedPerformances: [],
        checkAllBoxes: false,
        amountChecked: 0
      }
  }

  componentDidMount(){
    axios.get('/api/performances').then(res => {
      console.log("Res data is:", res.data)
      this.setState({
        fetchedPerformances: res.data
      })
    })
  .catch(err => console.log("Error is: ", err))
  }

  reloadPerformances(){
    axios.get('/api/performances').then(res => {
      this.setState({
        fetchedPerformances: res.data
      })
    }).catch(err => console.log(err))
  }

  markAllChecked(){
    this.setState({
      checkAllBoxes: !this.state.checkAllBoxes,
      amountChecked: this.state.fetchedPerformances.length
    })
  }

  render(){

    const checkedBoxStyle = { backgroundColor: "#5182EA", borderColor: "#5182EA"}

    const itemRowSelectedStyle = { backgroundColor: "#E8E8E8" }

    const fullPageStyle = { width: "100%" }

    const fetchedItemsAmount = this.state.fetchedPerformances.length == 1 ? "item selected" : "items selected"

    const displayTrashAll = {display: "none"}

    const allPerformances = this.state.fetchedPerformances.map((performance, i) => {return (
      <IndivPerformanceDetails key={i} index={i} performance={performance} checkAll={this.state.checkAllBoxes} checkedQty={0} reloadPerformances={this.reloadPerformances.bind(this)}/>
    )
  })

    return(
      <main className="adminWrapper" style={ this.props.dropdownDisplayed ? null : fullPageStyle}>
        <section className="adminContentContainer">
          <div className="adminPageHeaderContainer">
            <p className="adminPageHeader">Current Performances</p>
            <Link to="/admin">
              <i className="fa fa-plus-square" aria-hidden="true"></i>
            </Link>
          </div>
          <div className="itemsSelected">
            <p>{this.state.checkAllBoxes ? this.state.amountChecked : 0} {fetchedItemsAmount}</p>
            <p style={this.state.checkAllBoxes ? null : displayTrashAll}><i className="fa fa-trash trashAll" aria-hidden="true"></i></p>
          </div>
          <div className="columnTitles postDetailsWrapper" style={this.state.checkAllBoxes ? itemRowSelectedStyle : null}>
            <div className="blogDetailsItem1">
              <div className="checkbox" onClick={this.markAllChecked.bind(this)} style={this.state.checkAllBoxes ? checkedBoxStyle : null}><i className="fa fa-check fa-fw whiteCheck" aria-hidden="true"></i></div>
            </div>
            <div className="blogDetailsItem2">
              <p>Title</p>
            </div>
            <div className="blogDetailsItem3">
              <p>Start Date</p>
            </div>
            <div className="blogDetailsItem4">
              <p>End Date</p>
            </div>
            <div className="blogDetailsItem5">
              <p>Actions</p>
            </div>
          </div>
          {allPerformances}
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

export default connect(mapStateToProps)(AdminPerformances);
