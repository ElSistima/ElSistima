import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';




class MapInsert extends Component {
  static defaultProps = {
    center: {lat: 40.493547, lng: -79.936580},
    zoom: 11
  };


  render() {
    var style = {
      width: '100px',
      height: '100px',
      // backgroundColor:'red'
    }
    var style2 = {
      width: '50px',
      height: '50px',
    }

    var style3 = {
      color: 'black',
      fontWeight: 'bold',
      minWidth: '200px',
      marginTop: '30px',
      fontSize: '20px'
    }

    var style4 = {
      display: 'flex',
      cursor: 'pointer'
    }


    return (
      <GoogleMapReact
        bootstrapURLKeys={{key: "AIzaSyAKFtt59RLm03xdQmVLsAd6iCig8R4k7Ho"}}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
      <div lat={40.493547}
      lng={-79.936580}
      style={style4}>
        <img src='https://s-media-cache-ak0.pinimg.com/originals/84/b0/99/84b099dc310ef42fdce58c55a56fd5ed.png' style={style2} />
        <div style={style3}>6 4th St</div>
      </div>

      </GoogleMapReact>
    );
  }
}

export default MapInsert;
