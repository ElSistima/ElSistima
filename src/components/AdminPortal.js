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
import AdminClasses from './AdminClasses';
import AdminPerformances from './AdminPerformances';
import AdminContentPics from './AdminContentPics';
import AdminContentText from './AdminContentText';
import AdminMedia from './AdminMedia';

import AdminBlog_UPDATE from './AdminBlog_UPDATE';
import {hamClicked} from './../ducks/reducer';
import {connect} from 'react-redux';
import AdminCP_ADDNEW  from './AdminCP_ADDNEW';
import AdminCT_ADDNEW from './AdminCT_ADDNEW';
import AdminCalender_ADDNEW_Class from './AdminCalender_ADDNEW_Class';



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
          <Route path="/admin/calenderClass/addNew" component={AdminCalender_ADDNEW_Class} />
          <Route path="/admin/contentPic/addNew" component={AdminCP_ADDNEW} />
          <Route path="/admin/contentText/addNew" component={AdminCT_ADDNEW} />
          <Route exact path="/admin/blog/addNew" component={AdminBlog_ADDNEW} />
          <Route exact path="/admin/volunteer/addNew" component={AdminVolunteer_ADDNEW} />
          <Route exact path="/admin/blog" component={AdminBlog} />
          <Route exact path="/admin/classes" component={AdminClasses} />
          <Route exact path="/admin/performances" component={AdminPerformances} />
          <Route exact path="/admin/contentpics" component={AdminContentPics} />
          <Route exact path="/admin/contenttext" component={AdminContentText} />
          <Route exact path="/admin/media" component={AdminMedia} />

          <Route exact path="/admin/blog/update/:posts_id" component={AdminBlog_UPDATE} />
        </Switch>
      </main>
    )
  }
}


export default connect(null, {hamClicked})(AdminPortal);
