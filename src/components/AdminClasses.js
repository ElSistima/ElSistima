import React, {Component} from 'react';
import './../styles/adminEditor.css';
import axios from 'axios';
import IndivClassDetails from './IndivClassDetails';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class AdminClasses extends Component {
  constructor(props){
    super(props);
      this.state ={
        fetchedClasses: [],
        checkAllBoxes: false,
        amountChecked: 0
      }
  }

  componentDidMount(){
    console.log("AdminClasses Mounted")
    axios.get('/api/classes').then(res => {
      console.log("Class data is: ", res.data)
      this.setState({
        fetchedClasses: res.data
      })
    }).catch(err => console.log(err))
  }

  reloadClasses(){
    axios.get('/api/classes').then(res => {
      console.log("Res data is: ", res.data)
      this.setState({
        fetchedClasses: res.data
      })
    }).catch(err => console.log(err))
  }

  markAllChecked(){
    this.setState({
      checkAllBoxes: !this.state.checkAllBoxes,
      amountChecked: this.state.fetchedClasses.length
    })
  }

  render(){

    console.log("State fetchedClasses is: ", this.state.fetchedClasses)

    const checkedBoxStyle = { backgroundColor: "#5182EA", borderColor: "#5182EA"}

    const itemRowSelectedStyle = { backgroundColor: "#E8E8E8" }

    const fullPageStyle = { width: "100%" }

    const allClasses = this.state.fetchedClasses.map((classObj, i) => {
      return (
      <IndivClassDetails key={i} index={i} classObj={classObj} checkAll={this.state.checkAllBoxes} checkedQty={0} reloadClasses={this.reloadClasses.bind(this)} />
    )
  })

    return(
      <main className="adminWrapper" style={ this.props.dropdownDisplayed ? null : fullPageStyle}>
        <section className="adminContentContainer">
          <div className="adminPageHeaderContainer">
            <p className="adminPageHeader">Current Classes</p>
            <Link to="/admin/classes/addNew">
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
          {allClasses}
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

export default connect(mapStateToProps)(AdminClasses);
