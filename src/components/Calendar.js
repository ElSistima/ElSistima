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
          <div className='classes'>
            <div></div>
            <h4>Classes</h4>
          </div>
          <br />
          <div className='performances'>
            <div></div>
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
