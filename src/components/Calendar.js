import React, {Component} from 'react';
// import './../styles/calendar.css';
import './../styles/HuysDontTouch/calendarPage.css';
import axios from 'axios';
import CalendarDetail from './CalendarDetailView';

export default class Calendar extends Component{

  render(){
    return (
      <main className="calendarWrapper">
        <h1 className="header_h1">Calendar</h1>
        <div className='banner_one'>
          <div className='banner_text'>
            <h4>Notifications</h4>
            <p>Know what's happening, when it's happening! Get updated on all the classes, performances and events of El Sistema.
              Receive text messages for every class, performance or event your child is part of.</p>
            <button>Sign Up</button>
          </div>
        </div>
        <div className='nav'>
          <div className='list'>
            <h3><i className="fa fa-list" aria-hidden="true"></i>List</h3>
          </div>
        <div className='calendar'>
          <h3><i className="fa fa-calendar" aria-hidden="true"></i>Calendar</h3>
        </div>
        <div className='showAll'>
          <h3><i className="fa fa-calendar" aria-hidden="true"></i>Show All
          <i className="fa fa-caret-down" aria-hidden="true"></i>
          </h3>
        </div>
          <div className='nav_list'>
            <h4>Classes</h4>
            <h4>Performances</h4>
          </div>
        </div>
        <div>
          <CalendarDetail />
        </div>

      </main>
    )
  }
}
