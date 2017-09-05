import React, {Component} from 'react';
import axios from 'axios';
import IndivBlogPostDetails from './IndivBlogPostDetails';
import './../styles/adminEditor.css';
import {blogItemClicked} from './../ducks/reducer';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class AdminBlog extends Component {
  constructor(props){
    super(props);
      this.state ={
        fetchedPosts: [],
        checkAllBoxes: false,
        itemsCountArr: []
      }
  }

  componentDidMount(){
    axios.get('/api/blogs').then(res => {
      var postsArr = [];
      res.data.forEach(item => {
        postsArr.push('')
      })
      this.setState({
        fetchedPosts: res.data,
        itemsCountArr: postsArr
      })
    })
  .catch(err => console.log("Error is: ", err))
  }


  reloadPosts(){
    axios.get('/api/blogs').then(res => {
      console.log("Res data is:", res.data)
      this.setState({
        fetchedPosts: res.data
      })
    })
  .catch(err => console.log("Error is: ", err))
  }


  markAllChecked(){
    this.setState({
      checkAllBoxes: !this.state.checkAllBoxes,
      amountChecked: this.state.fetchedPosts.length
    })
  }

  setItemTrue(index, value){

    let clonearr =  this.state.itemsCountArr;
    let splicearr = clonearr.splice(index, 1, value);
    this.setState({
      itemsCountArr: clonearr
    })
  }


  render(){

    const checkedBoxStyle = { backgroundColor: "#5182EA", borderColor: "#5182EA"}

    const itemRowSelectedStyle = { backgroundColor: "#E8E8E8" }

    const hideTrashAll = {display: "none"}

    const allPosts = this.state.fetchedPosts.map((post, i) => {  return (
      <IndivBlogPostDetails key={i} post={post} index={i} checkAll={this.state.checkAllBoxes} reloadPosts={this.reloadPosts.bind(this)} setItemTrue={this.setItemTrue.bind(this)}/>
    )
    })

    const filteredItemsCount = this.state.itemsCountArr.filter(item => {
      return item === true
    })

    const fullPageStyle = { width: "100%" }

    const postAmount = this.state.fetchedPosts.length == 1 ? "item selected" : "items selected"

    return(
      <main className="adminWrapper" style={ this.props.dropdownDisplayed ? null : fullPageStyle}>
        <section className="adminContentContainer">
          <div className="adminPageHeaderContainer">
            <p className="adminPageHeader">Current Blog Posts</p>
            <Link to="/admin/blog/addNew">
              <i className="fa fa-plus-square" aria-hidden="true"></i>
            </Link>
          </div>
          <div className="itemsSelected">
            <p>{this.props.blogItemsArr.length} {postAmount}</p>
            <i className="fa fa-trash trashAll" aria-hidden="true" style={this.props.blogItemsArr.length < 1 ? hideTrashAll : null}></i>
          </div>
          <div className="columnTitles postDetailsWrapper" style={this.state.checkAllBoxes ? itemRowSelectedStyle : null}>
            <div className="blogDetailsItem1">
              <div className="checkbox" onClick={this.markAllChecked.bind(this)} style={this.state.checkAllBoxes ? checkedBoxStyle : null}><i className="fa fa-check fa-fw whiteCheck" aria-hidden="true"></i></div>
            </div>
            <div className="blogDetailsItem2">
              <p>Title</p>
            </div>
            <div className="blogDetailsItem3">
              <p>Publish Date</p>
            </div>
            <div className="blogDetailsItem4">
              <p>Author</p>
            </div>
            <div className="blogDetailsItem5">
              <p>Actions</p>
            </div>
          </div>
          {allPosts}
        </section>
      </main>
    )
  }
}

function mapStateToProps(state){
  console.log("Reducer state: ", state)
  return{
    dropdownDisplayed: state.clicked,
    blogItemsArr: state.blogItems
  }
}

export default connect(mapStateToProps, {blogItemClicked})(AdminBlog);
