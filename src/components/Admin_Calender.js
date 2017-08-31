import React, {Component} from 'react';
import '../styles/adminhome_comp.css';
import axios from 'axios';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import '../styles/react-big-calendar.css';

BigCalendar.momentLocalizer(moment)
export default class Admin_Calender extends Component{
  constructor(props){
    super(props)
    this.state = {
      events: [],
      eventId: '',
      type: '',
      titleInput: '',
      subTitleInput: '',
      startDay: '',
      startMonth: '',
      startYear:'',
      startHour: 13,
      startMinute: 0,
      endDay: '',
      endMonth: '',
      endYear: '',
      endHour: 13,
      endMinute: 0,
      showButton: false,
      showEditBox: false,
      showCompleted: false,
      showEdited: false,
      showDeleted: false
    }
  }

  componentDidMount(){
    axios.get('/api/events').then(res => this.setState({events: res.data}))
  }

  displayButton(){
    if(this.state.showButton){
      return (
        <div className='turnButton'>
          <button onClick={this.onEditTask.bind(this)}>Edit Event</button>
          <button onClick={this.onDeleteTask.bind(this)}>Delete Event</button>
        </div>
      )
    }
    else { return <button className='turnButton2' onClick={this.onCreateNewTask.bind(this)}>Create A New Event</button> }
  }

  aloopThouSixTyMinsOptions(){
    var options = []
    for(var i = 0; i <= 60; i++){
      options.push(<option key={i} value={i}>{`${i}`}</option>)
    }
    return options
  }


  aloopThouTwentyFourHoursOptions(){
    var options = [];
    var month;
    for(var i = 1; i < 12; i++){
      switch (i) {
        case 1: month = 'January'
        break;
        case 2: month = 'February'
        break;
        case 3: month = 'March'
        break;
        case 4: month = 'April'
        break;
        case 5: month = 'May'
        break;
        case 6: month = 'June'
        break;
        case 7: month = 'July'
        break;
        case 8: month = 'August'
        break;
        case 9: month = 'September'
        break;
        case 10: month = 'October'
        break;
        case 11: month = 'November'
        break;
        case 12: month = 'December'
        break;
        default:   break;

      }
      options.push(<option key={i} value={month}>{`${month}`}</option>)
    }
    return options
  }

  aloopThouThirtyOneDaysOptions(){
    var options = []
    for(var i = 1; i <= 31; i++){
      options.push(<option key={i} value={i}>{`${i}`}</option>)
    }
    return options
  }

  onDeleteTask(){
    axios.delete(`/api/events/${this.state.eventId}`)
      .then(res => {
        console.log(res.date)
        axios.get('/api/events').then(res => this.setState({events: res.data}))
        this.setState({
          events: [],
          eventId: '',
          type: '',
          titleInput: '',
          subTitleInput: '',
          startDay: '',
          startMonth: '',
          startYear:'',
          startHour: 13,
          startMinute: 0,
          endDay: '',
          endMonth: '',
          endYear: '',
          endHour: 13,
          endMinute: 0,
          showButton: false,
          showEditBox: false,
          showDeleted: true
        })
        setTimeout(() => {this.setState({showDeleted: false})}, 2000);
      })
  }

  onCreateNewTask(){
    if(this.state.titleInput == '' || this.state.subTitleInput == '' ){
      return alert('Please complete the form')
    }
    var eventobj = {
      type: this.state.type,
      title: this.state.titleInput,
      subtitle: this.state.subTitleInput,
      thumbnail: 'none',
      day: this.state.startDay,
      month: this.state.startMonth,
      year: this.state.startYear,
      startHour: this.state.startHour,
      startMinute: this.state.startMinute,
      endHour: this.state.endHour,
      endMinute: this.state.endMinute,
      endDay: this.state.endDay,
      endMonth: this.state.endMonth,
      endYear: this.state.endYear
    }
    axios.post('/api/events', eventobj)
      .then(res => {
        console.log(res.data)
        axios.get('/api/events').then(res => this.setState({events: res.data}))
        this.setState({
          showEditBox: false,
          showCompleted: true,
          eventId: '',
          type: '',
          titleInput: '',
          subTitleInput: '',
          startDay: '',
          startMonth: '',
          startYear:'',
          startHour: 13,
          startMinute: 0,
          endDay: '',
          endMonth: '',
          endYear: '',
          endHour: 13,
          endMinute: 0
        })
        setTimeout(() => {this.setState({showCompleted: false})}, 2000);
      })
  }
  onEditTask(){
    if(this.state.titleInput == '' || this.state.subTitleInput == '' ){
       return alert('Please complete the form')
    }
    var eventobj = {
      type: this.state.type,
      title: this.state.titleInput,
      subtitle: this.state.subTitleInput,
      day: this.state.startDay,
      month: this.state.startMonth,
      year: this.state.startYear,
      startHour: this.state.startHour,
      startMinute: this.state.startMinute,
      endHour: this.state.endHour,
      endMinute: this.state.endMinute,
      endDay: this.state.endDay,
      endMonth: this.state.endMonth,
      endYear: this.state.endYear
    }
    axios.put(`/api/events/${this.state.eventId}`, eventobj)
      .then(res => {
        console.log(res.data)
        axios.get('/api/events').then(res => this.setState({events: res.data}))
        this.setState({
          showEditBox: false,
          showEdited: true,
          eventId: '',
          type: '',
          titleInput: '',
          subTitleInput: '',
          startDay: '',
          startMonth: '',
          startYear:'',
          startHour: 13,
          startMinute: 0,
          endDay: '',
          endMonth: '',
          endYear: '',
          endHour: 13,
          endMinute: 0
        })
        setTimeout(() => {this.setState({showEdited: false})}, 2000);

      })
  }
  onChangeTitle(event){
    this.setState({titleInput: event.target.value})
  }
  onChangeSubTitle(event){
    this.setState({subTitleInput: event.target.value})
  }
  onChangeStartDay(event){
    this.setState({startDay: parseInt(event.target.value, 10)})
  }
  onChangeStartMonth(event){
    this.setState({startMonth: event.target.value})
  }
  onChangeStartYear(event){
    this.setState({startYear: parseInt(event.target.value, 10)})
  }
  onChangeStartHour(event){
    this.setState({startHour: parseInt(event.target.value, 10)})
  }
  onChangeStartMinute(event){
    this.setState({startMinute: parseInt(event.target.value, 10)})
  }
  onChangeEndDay(event){
    this.setState({endDay: parseInt(event.target.value, 10)})
  }
  onChangeEndMonth(event){
    this.setState({endMonth: event.target.value})
  }
  onChangeEndYear(event){
    this.setState({endYear: parseInt(event.target.value, 10)})
  }
  onChangeEndHour(event){
    this.setState({endHour: parseInt(event.target.value, 10)})
  }
  onChangeEndMinute(event){
    this.setState({endMinute: parseInt(event.target.value, 10)})
  }
  onChangeType(event){
    this.setState({type: event.target.value})
  }
  onXbutton(){
    this.setState({
      eventId: '',
      type: '',
      titleInput: '',
      subTitleInput: '',
      startDay: '',
      startMonth: '',
      startYear:'',
      startHour: 13,
      startMinute: 0,
      endDay: '',
      endMonth: '',
      endYear: '',
      endHour: 13,
      endMinute: 0,
      showButton: false,
      showEditBox: false
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
        'eventId': item.id,
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


    var displayNone = {
      display: 'none'
    }
    return(
      <div className="Adhome_rcc_Main adhome_calender" >
        <BigCalendar
      selectable
      eventPropGetter={(this.eventStyleGetter)}
      events={realevents}
      views= {['month','day']}
      defaultView='month'
      onSelectEvent={event => {
        this.setState({
          eventId: event.eventId,
          type: event.eventType,
          titleInput: event.eventTitle,
          subTitleInput: event.eventSubTitle,
          startDay: event.eventDay,
          startMonth: event.eventMonth,
          startYear: event.eventYear,
          startHour: event.eventHour,
          startMinute: event.eventMinute,
          endHour: event.eventHour_end,
          endMinute: event.eventMinute_end,
          endDay: event.eventDay_end,
          endMonth: event.eventMonth_end,
          endYear: event.eventYear_end,
          showButton: true,
          showEditBox: true
        })
      }}
      onSelectSlot={(slotInfo) => {
        let wordmonth;
        var day = parseInt(JSON.stringify(slotInfo.slots[0]).slice(9,11), 10);
        var month = JSON.stringify(slotInfo.slots[0]).slice(7,8);
        var year = parseInt(JSON.stringify(slotInfo.slots[0]).slice(1,5),10);

        switch (month) {
          case '1': wordmonth = 'January'
          break;
          case '2': wordmonth = 'February'
          break;
          case '3': wordmonth = 'March'
          break;
          case '4': wordmonth = 'April'
          break;
          case '5': wordmonth = 'May'
          break;
          case '6': wordmonth = 'June'
          break;
          case '7': wordmonth = 'July'
          break;
          case '8': wordmonth = 'August'
          break;
          case '9': wordmonth = 'September'
          break;
          case '10': wordmonth = 'October'
          break;
          case '11': wordmonth = 'November'
          break;
          case '12': wordmonth = 'December'
          break;

          default: break;
        }
        this.setState({
          startDay: day,
          startMonth: wordmonth,
          startYear: year,
          endDay: day,
          endMonth: wordmonth,
          endYear: year,
          showEditBox: true
        })

      }}

        />
        <div className='wrapperBox' style={this.state.showEditBox ? null : displayNone}>
        <div className='selectBox'>
          <h1>{`${this.state.startMonth} ${this.state.startDay}, ${this.state.startYear}`}</h1>
          <div className='titleBox'>
            <h3>Title: </h3>
            <input
              className='titleInput'
              onChange={this.onChangeTitle.bind(this)} value={this.state.titleInput}></input>
            <br/>
            <h3>Subtitle: </h3>
            <input
              className='subtitleInput'
              onChange={this.onChangeSubTitle.bind(this)}
              value={this.state.subTitleInput}></input>
            <br/>
            <h3>Type: </h3>
            <select value={this.state.type}
              className='titleOption'
              onChange={this.onChangeType.bind(this)}>
              <option value={'class'}>Class</option>
              <option value={'performance'}>Performance</option>
            </select>
          </div>

          <div className='startBox'>
            <h3>Start Date</h3>
            <br />
            <h4>Day:</h4>
            <select value={this.state.startDay} onChange={this.onChangeStartDay.bind(this)}>
              {this.aloopThouThirtyOneDaysOptions()}
            </select>
            <h4>Month:</h4>
            <select value={this.state.startMonth} onChange={this.onChangeStartMonth.bind(this)}>
              {this.aloopThouTwentyFourHoursOptions()}
            </select>
            <h4>Year:</h4>
            <input onChange={this.onChangeStartYear.bind(this)} value={this.state.startYear}></input>
            <br />
            <h4>Start hour:</h4>
            <select value={this.state.startHour} onChange={this.onChangeStartHour.bind(this)}>
              <option value={13}>1 PM</option>
              <option value={14}>2 PM</option>
              <option value={15}>3 PM</option>
              <option value={16}>4 PM</option>
              <option value={17}>5 PM</option>
              <option value={18}>6 PM</option>
              <option value={19}>7 PM</option>
              <option value={20}>8 PM</option>
              <option value={21}>9 PM</option>
              <option value={22}>10 PM</option>
              <option value={23}>11 PM</option>
              <option value={24}>12 PM</option>
              <option value={1}>1 AM</option>
              <option value={2}>2 AM</option>
              <option value={3}>3 AM</option>
              <option value={4}>4 AM</option>
              <option value={5}>5 AM</option>
              <option value={6}>6 AM</option>
              <option value={7}>7 AM</option>
              <option value={8}>8 AM</option>
              <option value={9}>9 AM</option>
              <option value={10}>10 AM</option>
              <option value={11}>11 AM</option>
              <option value={12}>12 AM</option>
            </select>
            <h4>Start minute:</h4>
            <select value={this.state.startMinute} onChange={this.onChangeStartMinute.bind(this)}>
              {this.aloopThouSixTyMinsOptions()}
            </select>
          </div>

          <div className='endBox'>
          <h3>End Date</h3>
          <br />
          <h4>Day:</h4>
          <select value={this.state.endDay} onChange={this.onChangeEndDay.bind(this)}>
            {this.aloopThouThirtyOneDaysOptions()}
          </select>
          <h4>Month:</h4>
          <select value={this.state.endMonth} onChange={this.onChangeEndMonth.bind(this)}>
            {this.aloopThouTwentyFourHoursOptions()}
          </select>
          <h4>Year:</h4>
          <input onChange={this.onChangeEndYear.bind(this)} value={this.state.endYear}></input>
          <br />
          <h4>End Hour:</h4>
          <select value={this.state.endHour} onChange={this.onChangeEndHour.bind(this)}>
            <option value={13}>1 PM</option>
            <option value={14}>2 PM</option>
            <option value={15}>3 PM</option>
            <option value={16}>4 PM</option>
            <option value={17}>5 PM</option>
            <option value={18}>6 PM</option>
            <option value={19}>7 PM</option>
            <option value={20}>8 PM</option>
            <option value={21}>9 PM</option>
            <option value={22}>10 PM</option>
            <option value={23}>11 PM</option>
            <option value={24}>12 PM</option>
            <option value={1}>1 AM</option>
            <option value={2}>2 AM</option>
            <option value={3}>3 AM</option>
            <option value={4}>4 AM</option>
            <option value={5}>5 AM</option>
            <option value={6}>6 AM</option>
            <option value={7}>7 AM</option>
            <option value={8}>8 AM</option>
            <option value={9}>9 AM</option>
            <option value={10}>10 AM</option>
            <option value={11}>11 AM</option>
            <option value={12}>12 AM</option>
          </select>
          <h4>End Minute:</h4>
          <select value={this.state.endMinute} onChange={this.onChangeStartMinute.bind(this)}>
            {this.aloopThouSixTyMinsOptions()}
          </select>
        </div>

        <div className='buttonBox'>
          {this.displayButton()}
          <button className='theXbutton' onClick={this.onXbutton.bind(this)}>[x]Close</button>
        </div>
      </div>
    </div>
    <div className='Completed' style={this.state.showCompleted ? null : displayNone}>
      <h1>Created An Event !</h1>
    </div>
    <div className='Completed' style={this.state.showEdited? null : displayNone}>
      <h1>Edited An Event !</h1>
    </div>
    <div className='Completed' style={this.state.showDeleted ? null : displayNone}>
      <h1>Deleted An Event !</h1>
    </div>
  </div>
    );
  }
}
