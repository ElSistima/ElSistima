import React, {Component} from 'react';
import './../styles/calendar.css';
import './../styles/HuysCalendarPage/calendarPage.css';
import axios from 'axios';

export default class Calendar extends Component{

  render(){
    return (
      <main className='wrapper'>
        <h1>Calendar</h1>
        <div className='banner'>
          <div className='banner_text'>
            <h4>Notifications</h4>
            <p>Know what's happening, when it's happening! Get updated on all the classes, performances and events of El Sistema.
              Receive text messages for every class, performance or event your child is part of.</p>
          </div>
        </div>
        <div className='nav'>
          <h3>List</h3>
          <h3>Calendar</h3>
          <h3>Show All</h3>
          <div className='nav_list'>
            <h4>Classes</h4>
            <h4>Performances</h4>
          </div>
        </div>
        
      </main>
    )
  }
}
