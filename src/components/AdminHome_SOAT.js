import React, {Component} from 'react';
import '../styles/adminhome_comp.css';

export default class AdminHome_RCC extends Component{
  constructor(props){
    super(props);

    this.state = {
      titleInput: '',
      contentInput: '',
      staff: false,
      parents: false,
      donations: false
    }
  }

  onChangeStaffCheckBox(event){
    console.log(event.target.value);
  }

  render(){
    return(
      <main className="Adhome_rcc_Main">
        <div className="rcc_header_big"><span>Send Out A Text</span></div>
        <div className="inner-function">
          <input className='title-text'
            placeholder='Title'
            ></input>
          <textarea className='content-text'
            placeholder='Lorem ipsum dolor sit amet, graecis apeirian deterruisset ex pri. Ut usu legendos deseruisse efficiantur, ei vix alii rationibus. Sea unum sensibus no, cu commodo copiosae prodesset pro, vel quem veri ipsum id. Erat illum an duo, essent facilis adipiscing ad duo. Quo eu sapientem erroribus vulputate. Ad iusto regione nam, dicit accommodare mel cu.'
            ></textarea>

            <h4 className='text-notify'>Notify</h4>

          <div className='options'>
            <div className='check-all'>
              <input type="checkbox"></input>
              <h4>All</h4>
            </div>
            <input type="checkbox"></input>
            <h4>Staff</h4>
            <input type="checkbox"></input>
            <h4>Parents</h4>
            <input type="checkbox"></input>
            <h4>Donators</h4>
          </div>
          <div className='button-group'>
            <div></div>
            <div className='main-buttons-1'>
              <button>CANCEL</button>
              <button className='button-send'>SEND</button>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
