import React, {Component} from 'react';
import '../styles/jessicas.css';
import {connect} from 'react-redux';

class AdminCalender_ADDNEW_Class extends Component{
  constructor(props){
    super(props);

  }

  render(){

    const fullPageStyle = { width: "100%" }

    return(
      <main className="AdminBlog_ADDNEW_Main" style={ this.props.dropdownDisplayed ? null : fullPageStyle}>
      <div className="add_new_blog">
        <div className="anb_headerText">Add New Calender Event (Class)</div>

        <div className="add_new_pics calender_class_pic">
          <div className="add_pic_inner">
            <div>Add Full Picture</div>
            <img src='https://i.imgur.com/FTLTf6u.png' />
          </div>
        </div>

        <div className="anb_topInput">
          <input placeholder="Title"/>
          <input className="captionInput" placeholder="Catagory"/>
        </div>

        <div className="maintxt_Content calender_class_mainTxt">
          <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
        </div>

        <div className="anb_topInput">
          <input placeholder="Start Date"/>
          <input className="captionInput" placeholder="End Date"/>
        </div>

        <input placeholder="Location" className="location"/>
      </div>

     <div className="classRepeat">
      <div className="repeating">Repeating</div>
      <div className="selectRepeat">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
        <div className="inputLine">
          <div className="eachInput inputLineStart">
            <input type="checkbox"/>
            <div>S</div>
          </div>

          <div className="eachInput">
            <input type="checkbox"/>
            <div>M</div>
          </div>

          <div className="eachInput">
            <input type="checkbox"/>
            <div>T</div>
          </div>


          <div className="eachInput">
            <input type="checkbox"/>
            <div>W</div>
          </div>


          <div className="eachInput">
            <input type="checkbox"/>
            <div>T</div>
          </div>


          <div className="eachInput">
            <input type="checkbox"/>
            <div>F</div>
          </div>


          <div className="eachInput">
            <input type="checkbox"/>
            <div>S</div>
          </div>
        </div>
      </div>
     </div>



     <div className="hrSelector">
      <div>Monday</div>

      <div className="leftSelect">
        <select className="eachSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </select>

        <select className="eachSelect">
          <option>00</option>
          <option>15</option>
          <option>30</option>
          <option>45</option>
        </select>

        <select className="eachSelect removeRightBD">
          <option>PM</option>
          <option>AM</option>
        </select>

      </div>

      <div>To</div>

      <div className="leftSelect">
      <select className="eachSelect">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
      </select>

      <select className="eachSelect">
        <option>00</option>
        <option>15</option>
        <option>30</option>
        <option>45</option>
      </select>

      <select className="eachSelect removeRightBD">
        <option>PM</option>
        <option>AM</option>
      </select>
      </div>

     </div>





     <div className="ctBT_overwrite calender_class_btn">
       <div className="ctBT_singlebtn ctBT_web_save">SAVE</div>
       <div className="ctBT_singlebtn ctBT_web_cancel calender_class_cancel">CANCEL</div>
     </div>

     <div className="web_btn calender_class_btn">
       <div className="singlebtn web_save">SAVE</div>
       <div className="singlebtn web_cancel">CANCEL</div>
     </div>


      </main>
    )
  }
}

function mapStateToProps(state){
  return{
    dropdownDisplayed: state.clicked
  }
}

export default connect(mapStateToProps)(AdminCalender_ADDNEW_Class);
