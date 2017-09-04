import React, {Component} from 'react';
import './../styles/media.css';
import axios from 'axios';
import MediaCard from './MediaCard';




export default class Media extends Component{
  constructor(props){
    super(props);

    this.state = {
      fetchedMedia: [],
      fetchedPictures: [],
      fetchedVideos: []
    }
  }

  componentDidMount(){
    axios.get('/api/media').then(res => {
      console.log(res.data)
      this.setState({
        fetchedMedia: res.data,

        fetchedPictures: res.data.filter(mediaObj => {
          return mediaObj.is_picture === true;
        }),

        fetchedVideos: res.data.filter(mediaObj => {
          return mediaObj.is_picture === false;
        })
      })
    })
    .catch(err => console.log("There was an Error: ", err))
  }

  reloadMedia(){
    axios.get('/api/media').then(res => {
      console.log("Media res.data is: ", res.data)
      this.setState({
        fetchedMedia: res.data
      })
    }).catch(err => console.log("Error is: ", err))
  }

  render(){
    console.log('fetchedPictures', this.state.fetchedPictures)
    console.log('this is a test', this.state)
    const test = this.state.fetchedMedia
    const pictures = [];
    for(var key in test){
      pictures.push(test[key])
    }
    const allPictures = this.state.fetchedPictures.map((media, index) => {
      return(
        <MediaCard
        key={index} index={index} media={media} reloadMedia={this.reloadMedia.bind(this)}
        /* image={picture}
        key={index} */
        />
        // test.map(item => {
        //   console.log(item)
        // })
      )
    })

    const allVideos = this.state.fetchedVideos.map((media, index) => {
      return(
        <MediaCard
        key={index} index={index} media={media} reloadMedia={this.reloadMedia.bind(this)}
        /* image={picture}
        key={index} */
        />
        // test.map(item => {
        //   console.log(item)
        // })
      )
    })


    return (
      <main className="mediaMainContent">
        
        <section className="photoVideoToggleContainer">
          <div className="photoVideoToggleSwitch">
            <p className="photoVideoToggleText">Photos</p>
          </div>
          </section>
  
  
          <section className="mediaGridPhotosContainer">
            <div className="mediaGrid">
             
            <div className="photosFormat">{allPictures}</div>
            </div>
          </section>
  
          <section className="videosHeader">
            <div className="photoVideoToggleSwitch">
                <p className="photoVideoToggleText">Videos</p>
                </div>
            </section>
  
          <section className="mediaGridVideosContainer">
           
            <div className="mediaGrid">
              
            <div className="photosFormat">{allVideos}</div>
            </div>
          </section>
        
  
          
      </main>
    )
  }
  
}
