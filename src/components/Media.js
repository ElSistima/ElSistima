import React from 'react';
import './../styles/media.css';
import ToggleSwitch from './ToggleSwitch.js';




export default function Media(props){
  return (
    <main className="mediaMainContent">
      <section className="photoVideoToggleContainer">
        <div className="photoVideoToggleSwitch">
          <p className="photoVideoToggleText">Photo</p>
          <div className="toggleTrack">
            <div className="switchSwitch"></div>
          </div>
          <p className="photoVideoToggleText">Video</p>
        </div>
        </section>

        <section className="dateFilterContainer">
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
        </section>

        <section className="mediaGridPhotosContainer">
          <div className="mediaGridPhotos">
            
          </div>
        </section>

        <section className="mediaGridVideosContainer">
          <div className="mediaGridVideos">
            
          </div>
        </section>
      

        
    </main>
  )
}
