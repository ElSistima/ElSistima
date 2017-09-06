import React, {Component} from 'react';
import '../styles/adminHome.css';
import AdminHome_RCC from './AdminHome_RCC';
import AdminHome_SOAT from './AdminHome_SOAT';
import Admin_Calender from './Admin_Calender';
import {connect} from 'react-redux';
import axios from 'axios';



class AdminHome extends Component{
  componentDidMount(){
    axios.get('/api/admin')
      .then(res => {
        if(!res.data[0].admin_status){
          this.props.history.push('/')
        }
      })
  }

  render(){

      const fullPageStyle = { width: "100%" }

    return(
      <main className="Ad_homeMain" style={ this.props.dropdownDisplayed ? null : fullPageStyle}>
        <AdminHome_RCC />
        <AdminHome_SOAT />
        <Admin_Calender />
      </main>
    )
  }
}

function mapStateToProps(state){
  return{
    dropdownDisplayed: state.clicked
  }
}

export default connect(mapStateToProps)(AdminHome);
