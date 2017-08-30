import React, {Component} from 'react';
import '../styles/adminHome.css';
import AdminHome_RCC from './AdminHome_RCC';
import AdminHome_SOAT from './AdminHome_SOAT';
import Admin_Calender from './Admin_Calender';

export default class AdminHome extends Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      <main className="Ad_homeMain">
        <AdminHome_RCC />
        <AdminHome_SOAT />
        <Admin_Calender />
      </main>
    )
  }
}
