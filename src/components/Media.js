import React, {Component} from 'react';
import './../styles/media.css';
import axios from 'axios';
import PhotoCard from './PhotoCard';




export default class Media extends Component{
  constructor(props){
    super(props);

    this.state = {
      fetchedMedia: []
    }
  }

  componentDidMount(){
    axios.get('/api/media').then(res => {
      console.log(res.data)
      this.setState({
        fetchedMedia: res.data
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
    console.log('this is a test', this.state)
    const test = this.state.fetchedMedia
    const pictures = [];
    for(var key in test){
      pictures.push(test[key])
    }
    const media = this.state.fetchedMedia.map((media, index) => {
      return(
        <PhotoCard
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
            {/* <div className="toggleTrack">
              <div className="switchSwitch"></div>
            </div> */}

            {/* test div */}
            

          </div>
          </section>
  
          {/* <section className="dateFilterContainer">
            <div className="dateFilter">
              <div className="dropMenus">
                <p className="dropMenusText">Year</p>
                <div className="dropArrow"></div>
              </div>
              <div className="dropMenus2">
                <p className="dropMenusText">Month</p>
                <div className="dropArrow"></div>
              </div>
              <div className="dropMenus3">
                <p className="dropMenusText">Title</p>
                <div className="dropArrow"></div>
              </div>
            </div>
            <div className="filterButton">Filter</div>
          </section> */}
  
          <section className="mediaGridPhotosContainer">
            <div className="mediaGridPhotos">
              {/* PHOTOS HERE  */}
            <div className="photosFormat">{media}</div>
            </div>
          </section>
  
          <section className="videosHeader">
            <div className="photoVideoToggleSwitch">
                <p className="photoVideoToggleText">Videos</p>
                </div>
            </section>
  
          <section className="mediaGridVideosContainer">
           
            <div className="mediaGridVideos">
              VIDEOS HERE
            {/* <div>{media}</div> */}
            </div>
          </section>
        
  
          
      </main>
    )
  }
  
}
