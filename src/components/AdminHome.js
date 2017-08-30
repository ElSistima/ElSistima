import React, {Component} from 'react';
import '../styles/adminHome.css';
import AdminHome_RCC from './AdminHome_RCC';
import AdminHome_SOAT from './AdminHome_SOAT';
import Admin_Calender from './Admin_Calender';
import {connect} from 'react-redux';

class AdminHome extends Component{
  constructor(props){
    super(props);

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
