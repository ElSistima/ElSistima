import React, {Component} from 'react';
import '../styles/adminSidebar.css';

export default class AdminSideBar extends Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      <main className="Ad_sidebarMain">
        <div className="sideNav">
          <i className="sidefa fa fa-plus-square" aria-hidden="true"></i>
          <div>Create New</div>
        </div>
        <div className="sideNav">
          <i className="sidefa fa fa-user-circle" aria-hidden="true"></i>
          <div>Volunteers</div>
        </div>
        <div className="sideNav">
          <i className="sidefa fa fa-calendar" aria-hidden="true"></i>
          <div>Classes</div>
        </div>
        <div className="sideNav">
          <i className="sidefa fa fa-music" aria-hidden="true"></i>
          <div>Performances</div>
        </div>
        <div className="sideNav">
          <i className="sidefa fa fa-file-image-o" aria-hidden="true"></i>
          <div>Content Pictures</div>
        </div>
        <div className="sideNav">
          <i className="sidefa fa fa-file" aria-hidden="true"></i>
          <div>Content Text</div>
        </div>
        <div className="sideNav">
          <i className="sidefa fa fa-picture-o" aria-hidden="true"></i>
          <div>Media</div>
        </div>
        <div className="sideNav">
          <i className="sidefa fa fa-book" aria-hidden="true"></i>
          <div>Blog</div>
        </div>
      </main>
    )
  }
}
