import React, {Component} from 'react';
import {render} from 'react-dom';
import Switch from 'react-toggle-switch';
import './../styles/toggleSwitch.css';




class ToggleSwitch extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      switched: false
    };
  }
 
  toggleSwitch = () => {
    this.setState(prevState => {
      return {
        switched: !prevState.switched
      };
    });
  };
 
  render() {
    return (
        <div className="toggler">
            {/* Basic Switch */}
            <Switch onClick={this.toggleSwitch}/>
 
            {/* With children */}
            <Switch onClick={this.toggleSwitch}>
              <i class="circleSwitch"/>
            </Switch>
 
            {/* Disabled */}
            <Switch enabled={false}/>
 
            {/* Custom classnames */}
            <Switch className='other-class'/>
        </div>
    );
  }
 
}
 
export default ToggleSwitch;