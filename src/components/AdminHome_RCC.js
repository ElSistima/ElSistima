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
        <div className="rcc_rable_row rcc_head">
          <div className="tableInner"><span>Type</span></div>
          <div className="tableInner"><span>Date</span></div>
          <div className="tableInner"><span>Title</span></div>
          <div className="tableInner"><span>Edit</span></div>
        </div>

        <div className="rcc_rable_row">
          <div className="tableInner">
            <div className="innerWraper">
              <input type="checkbox"/>
            </div>
            <span className="innerSpan">Quote</span>
          </div>
          <div className="tableInner"><span>7/23/17</span></div>
          <div className="tableInner"><span>Mission</span></div>
          <div className="tableInner"><span><i className="fa fa-pencil" aria-hidden="true"></i></span></div>
        </div>

        <div className="rcc_rable_row">
        <div className="tableInner">
          <div className="innerWraper">
            <input type="checkbox"/>
          </div>
          <span className="innerSpan">Volunteer</span>
        </div>
          <div className="tableInner"><span>7/28/17</span></div>
          <div className="tableInner"><span>Jerry Smith</span></div>
          <div className="tableInner"><span><i className="fa fa-pencil" aria-hidden="true"></i></span></div>
        </div>

        <div className="rcc_rable_row">

          <div className="tableInner">
            <div className="innerWraper">
              <input type="checkbox"/>
            </div>
            <span className="innerSpan">Class</span>
          </div>

          <div className="tableInner"><span>7/29/17</span></div>
          <div className="tableInner"><span>Bucket Band</span></div>
          <div className="tableInner"><span><i className="fa fa-pencil" aria-hidden="true"></i></span></div>
        </div>

        <div className="rcc_rable_row">

          <div className="tableInner">
            <div className="innerWraper">
              <input type="checkbox"/>
            </div>
            <span className="innerSpan">Blog</span>
          </div>

          <div className="tableInner"><span>08/02/17</span></div>
          <div className="tableInner"><span>Kids in music</span></div>
          <div className="tableInner"><span><i className="fa fa-pencil" aria-hidden="true"></i></span></div>
        </div>
      </main>
    )
  }
}
