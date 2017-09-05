// BEGINNING OF ALL IMPORTS
import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import AdminHeader from './AdminHeader';
import AdminSideBar from './AdminSideBar';
import AdminHome from './AdminHome';
import AdminVolunteer from './AdminVolunteer';
import AdminBlog_ADDNEW from './AdminBlog_ADDNEW';
import AdminVolunteer_ADDNEW from './AdminVolunteer_ADDNEW';
import AdminVolunteer_UPDATE from './AdminVolunteer_UPDATE';
import AdminBlog from './AdminBlog';
import AdminClasses from './AdminClasses';
import AdminPerformances from './AdminPerformances';
import AdminContentPics from './AdminContentPics';
import AdminMedia from './AdminMedia';
import AdminMedia_ADDNEW from './AdminMedia_ADDNEW';
import AdminMedia_UPDATE from './AdminMedia_UPDATE';
import AdminBlog_UPDATE from './AdminBlog_UPDATE';
import AdminCP_ADDNEW  from './AdminCP_ADDNEW';
import AdminCT_ADDNEW from './AdminCT_ADDNEW';
import AdminCalender_ADDNEW_Class from './AdminCalender_ADDNEW_Class';
import AdminCalender_ADDNEW_Perf from './AdminCalender_ADDNEW_Perf';


import {hamClicked} from './../ducks/reducer';
import {connect} from 'react-redux';

// END OF ALL IMPORTS

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
          <Route exact path="/admin/volunteer" component={AdminVolunteer} />
          <Route exact path="/admin/volunteer/addNew" component={AdminVolunteer_ADDNEW} />
          <Route exact path="/admin/volunteer/update/:vol_id" component={AdminVolunteer_UPDATE} />
          <Route exact path="/admin/classes" component={AdminClasses} />
          <Route exact path="/admin/performances" component={AdminPerformances} />
          <Route exact path="/admin/contentpics" component={AdminContentPics} />
          <Route path="/admin/contentPic/addNew" component={AdminCP_ADDNEW} />
          <Route exact path="/admin/media" component={AdminMedia} />
          <Route exact path="/admin/media/addNew" component={AdminMedia_ADDNEW} />
          <Route exact path="/admin/media/update/:id" component={AdminMedia_UPDATE} />
          <Route exact path="/admin/blog" component={AdminBlog} />
          <Route exact path="/admin/blog/addNew" component={AdminBlog_ADDNEW} />
          <Route exact path="/admin/blog/update/:posts_id" component={AdminBlog_UPDATE} />

        </Switch>
      </main>
    )
  }
}


export default connect(null, {hamClicked})(AdminPortal);
