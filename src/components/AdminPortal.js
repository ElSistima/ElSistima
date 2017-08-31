import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import AdminHeader from './AdminHeader';
import AdminSideBar from './AdminSideBar';
import AdminHome from './AdminHome';
import AdminVolunteer from './AdminVolunteer';

import AdminBlog_ADDNEW from './AdminBlog_ADDNEW';
import AdminVolunteer_ADDNEW from './AdminVolunteer_ADDNEW';
import AdminBlog from './AdminBlog';
import AdminBlogEditor from './AdminBlogEditor';
import {hamClicked} from './../ducks/reducer';
import {connect} from 'react-redux';
import AdminCP_ADDNEW  from './AdminCP_ADDNEW';
import AdminCT_ADDNEW from './AdminCT_ADDNEW';



class AdminPortal extends Component{
  constructor(props){
    super(props);
    this.state ={
      sidebarOn:true
    }
  this.hamClicked = this.hamClicked.bind(this)
  }

  hamClicked(){
    this.setState({
      sidebarOn: !this.state.sidebarOn
    })
    this.props.hamClicked(this.state.sidebarOn)
  }


  render(){
    var hiddenHam = {
      display: "none"
    }
    console.log(this.state.sidebarOn)
    return(
      <main>
        <AdminHeader hamClicked={this.hamClicked}/>
        <div style={this.state.sidebarOn ? hiddenHam : null}>
          <AdminSideBar />
        </div>


        <Switch>
          <Route exact path="/admin" component={AdminHome} />
          <Route exact path="/admin/edit/blog" component={AdminBlogEditor} />
          <Route exact path="/admin/volunteer" component={AdminVolunteer} />

          <Route path="/admin/blog/addNew" component={AdminBlog_ADDNEW} />
          <Route path="/admin/volunteer/addNew" component={AdminVolunteer_ADDNEW} />
          <Route path="/admin/contentPic/addNew" component={AdminCP_ADDNEW} />
          <Route path="/admin/contentText/addNew" component={AdminCT_ADDNEW} />


        </Switch>
      </main>
    )
  }
}


export default connect(null, {hamClicked})(AdminPortal);
