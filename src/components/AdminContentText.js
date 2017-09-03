import React, {Component} from 'react';
import './../styles/adminEditor.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class AdminContentText extends Component{
  constructor(props){
    super(props);
      this.state ={
        fetchedPosts: [],
        checkAllBoxes: false,
        amountChecked: 0
      }
  }

  markAllChecked(){
    this.setState({
      checkAllBoxes: !this.state.checkAllBoxes,
      amountChecked: this.state.fetchedPosts.length
    })
  }

  render(){

    const checkedBoxStyle = { backgroundColor: "#5182EA", borderColor: "#5182EA"}

    const itemRowSelectedStyle = { backgroundColor: "#E8E8E8" }

    const fullPageStyle = { width: "100%" }

    return(
      <main className="adminWrapper" style={ this.props.dropdownDisplayed ? null : fullPageStyle}>
        <section className="adminContentContainer">
          <div className="adminPageHeaderContainer">
            <p className="adminPageHeader">Current Text Content</p>
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
              <p>Type</p>
            </div>
            <div className="blogDetailsItem3">
              <p>Date Published</p>
            </div>
            <div className="blogDetailsItem4">
              <p>Title</p>
            </div>
            <div className="blogDetailsItem5">
              <p>Actions</p>
            </div>
          </div>
          INDIV VOLUNTEER COMPONENT HERE
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

export default connect(mapStateToProps)(AdminContentText);
