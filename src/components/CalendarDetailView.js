import React, {Component} from 'react';
import './../styles/HuysDontTouch/calendarPage.css';
import axios from 'axios';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import '../styles/react-big-calendar-client-side.css';

BigCalendar.momentLocalizer(moment)
export default class CalenderDetail extends Component{
  constructor(props){
    super(props)
    this.state = {
      events: [],
      type: '',
      titleInput: '',
      subTitleInput: '',
      startDay: '',
      startMonth: '',
      startYear: '',
      startHour: '',
      startMinute: '',
      endHour: '',
      endMinute: '',
      endDay: '',
      endMonth: '',
      endYear: '',
      showEvent: false
    }
  }

  componentDidMount(){
    axios.get('/api/events').then(res => this.setState({events: res.data}))
  }

  closeEvent(){
    this.setState({
      showEvent: false
    })
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
    var displayNone = {
      display: 'none'
    }
    var realevents = this.state.events.map(item => {
      var month = item.date_month_number - 1;
      var monthend = item.date_month_end_num - 1;
      var hexColor;
      if(item.type == 'performance') {
        hexColor = '#4088af'
      }
      else {hexColor = '#00c48c'}
      return {
        'title': `${item.title}`,
        'start': new Date(item.date_year, month, item.date_days, item.event_hour, item.event_minute, 0),
        'end': new Date(item.date_year_end, monthend, item.date_days_end, item.event_hour_end, item.event_minute_end, 0),
        'eventTitle': item.title,
        'eventSubTitle': item.subtitle,
        'eventType': item.type,
        'eventDay': item.date_days,
        'eventMonth': item.date_month,
        'eventYear': item.date_year,
        'eventDay_end': item.date_days_end,
        'eventMonth_end': item.date_month_end,
        'eventYear_end': item.date_year_end,
        'eventHour': item.event_hour,
        'eventMinute': item.event_minute,
        'eventHour_end': item.event_hour_end,
        'eventMinute_end': item.event_minute_end,
        'hexColor': hexColor
      }
    })


    return(
      <div className="theCalendarDetailView" >
          <BigCalendar
        selectable
        eventPropGetter={(this.eventStyleGetter)}
        events={realevents}
        views= {['month','day']}
        defaultView='month'
        onSelectEvent={event => {
          let monthShortCut;
          switch (event.eventMonth) {
            case 'January': monthShortCut = 'JAN'
            break;
            case 'February': monthShortCut = 'FEB'
            break;
            case 'March': monthShortCut = 'MAR'
            break;
            case 'April': monthShortCut = 'APR'
            break;
            case 'May': monthShortCut = 'MAY'
            break;
            case 'June': monthShortCut = 'JUN'
            break;
            case 'July': monthShortCut = 'JUL'
            break;
            case 'August': monthShortCut = 'AUG'
            break;
            case 'September': monthShortCut = 'SEP'
            break;
            case 'October': monthShortCut = 'OCT'
            break;
            case 'November': monthShortCut = 'NOV'
            break;
            case 'December': monthShortCut = 'DEC'
            break;
            default:

          }
          this.setState({
            type: event.eventType,
            titleInput: event.eventTitle,
            subTitleInput: event.eventSubTitle,
            startDay: event.eventDay,
            startMonth: monthShortCut,
            startYear: event.eventYear,
            startHour: event.eventHour,
            startMinute: event.eventMinute,
            endHour: event.eventHour_end,
            endMinute: event.eventMinute_end,
            endDay: event.eventDay_end,
            endMonth: event.eventMonth_end,
            endYear: event.eventYear_end,
            showEvent: true
          })
        }}
          />
        <div className='event-card-wrapper' style={this.state.showEvent ? null : displayNone}>
          <div className='event-card'>
            <h1 className='event-start-day'>{this.state.startDay}</h1>
            <h1 className='event-start-month'>{this.state.startMonth}</h1>
            <div className='event-detail'>
              <h1>{this.state.type}</h1>
              <h2>{this.state.titleInput}</h2>
              <h3>{`${this.state.startHour}:${this.state.startMinute < 10 ? `${this.state.startMinute}0` : this.state.startMinute} - ${this.state.endHour}:${this.state.endMinute < 10 ? `${this.state.endMinute}0` : this.state.endMinute}`}</h3>
            </div>
            <div className='filter'></div>
            <button className="close-button"
                    onClick={this.closeEvent.bind(this)}
              ><i className="fa fa-times" aria-hidden="true"></i></button>
          </div>

        </div>
      </div>

    );
  }
}
