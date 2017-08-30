import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import AdminHeader from './AdminHeader';
import AdminSideBar from './AdminSideBar';
import AdminHome from './AdminHome';
import AdminVolunteer from './AdminVolunteer';
import AdminBlog_ADDNEW from './AdminBlog_ADDNEW';
import AdminVolunteer_ADDNEW from './AdminVolunteer_ADDNEW';

export default class AdminPortal extends Component{
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
  }


  render(){
    var hiddenHam = {
      display: "none"
    }
    console.log(this.state.sidebarOn)
    return(
      <main>
        <AdminHeader hamClicked={this.hamClicked}/>
        <div style={this.state.sidebarOn?{}:hiddenHam}>
          <AdminSideBar />
        </div>


        <Switch>
          <Route exact path="/admin" component={AdminHome} />
          <Route exact path="/admin/volunteer" component={AdminVolunteer} />
          <Route exact path="/admin/blog/addNew" component={AdminBlog_ADDNEW} />
          <Route exact path="/admin/volunteer/addNew" component={AdminVolunteer_ADDNEW} />
        </Switch>
      </main>
    )
  }
}
