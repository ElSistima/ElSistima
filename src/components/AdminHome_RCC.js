import React, {Component} from 'react';
import '../styles/adminhome_comp.css';

export default class AdminHome_RCC extends Component{
  constructor(props){
    super(props);

  }

  render(){
     var noSbStyle = {
       width: "300%",
       marginLeft: "20px",
       marginTop:"20px",
       marginBottom: "10px"
     }
    return(
      <main className="Adhome_rcc_Main">
        <div className="rcc_header_big"><span>Recent Content Changes</span></div>
        <div className="rcc_header"></div>
      </main>
    )
  }
}
