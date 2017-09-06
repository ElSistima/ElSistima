import React, {Component} from 'react';
import './../styles/adminEditor.css';
import IndivMediaDetails from './IndivMediaDetails';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class AdminMedia extends Component{
  constructor(props){
    super(props);
      this.state ={
        fetchedMedia: [],
        checkAllBoxes: false,
        amountChecked: 0
      }
  }

  componentDidMount(){
    axios.get('/api/admin')
      .then(res => {
        if(!res.data[0].admin_status){
          this.props.history.push('/')
        }
      })
    axios.get('/api/media').then(res => {
      console.log("Res data is:", res.data)
      this.setState({
        fetchedMedia: res.data
      })
    })
  .catch(err => console.log("Error is: ", err))
  }

  reloadMedia(){
    axios.get('/api/media').then(res => {
      console.log("Media res.data is: ", res.data)
      this.setState({
        fetchedMedia: res.data
      })
    }).catch(err => console.log("Error is: ", err))
  }

  markAllChecked(){
    this.setState({
      checkAllBoxes: !this.state.checkAllBoxes,
      amountChecked: this.state.fetchedMedia.length
    })
  }

  render(){

    const checkedBoxStyle = { backgroundColor: "#5182EA", borderColor: "#5182EA"}

    const itemRowSelectedStyle = { backgroundColor: "#E8E8E8" }

    const fullPageStyle = { width: "100%" }

    const allMedia = this.state.fetchedMedia.map((media, i) => { return (
      <IndivMediaDetails key={i} index={i} media={media} checkAll={this.state.checkAllBoxes} checkedQty={0} reloadMedia={this.reloadMedia.bind(this)}/>
    )
  })

    return(
      <main className="adminWrapper" style={ this.props.dropdownDisplayed ? null : fullPageStyle}>
        <section className="adminContentContainer">
          <div className="adminPageHeaderContainer">
            <p className="adminPageHeader">Current Media</p>
            <Link to="/admin/media/addNew">
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
          {allMedia}
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

export default connect(mapStateToProps)(AdminMedia);
