import React, {Component} from 'react';
import './../styles/HuysDontTouch/calendarPage.css';
import axios from 'axios';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import '../styles/react-big-calendar.css';

BigCalendar.momentLocalizer(moment)
export default class CalenderDetail extends Component{
  constructor(props){
    super(props)
    this.state = {
      events: [],
    }
  }

  componentDidMount(){
    axios.get('/api/events').then(res => this.setState({events: res.data}))
  }

  eventStyleGetter(event, start, end, isSelected) {
    var backgroundColor = event.hexColor;
    var style = {
        backgroundColor: backgroundColor,
    };
    return {
        style: style
    };

}



  render(){
    var realevents = this.state.events.map(item => {
      var month = item.date_month_number - 1;
      var monthend = item.date_month_end_num - 1;
      console.log(item)
      var hexColor;
      if(item.type == 'performance') {
        hexColor = '#4088af'
      }
      else {hexColor = '#00c48c'}
      return {
        'title': `${item.title}`,
        'start': new Date(item.date_year, month, item.date_days, item.event_hour, item.event_minute, 0),
        'end': new Date(item.date_year_end, monthend, item.date_days_end, item.event_hour_end, item.event_minute_end, 0),
        'hexColor': hexColor
      }
    })


    return(
      <div className="theCalendarDetailView" >
          <BigCalendar
        eventPropGetter={(this.eventStyleGetter)}
        events={realevents}
        views= {['month','day']}
        defaultView='month'
          />
      </div>
    );
  }
}
