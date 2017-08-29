import React from 'react';
import './../styles/global-style.css';
import './../styles/about.css';
import { Parallax } from 'react-parallax';



export default function About(props){
  return (

  
    <main className="aboutContainer">
      <div className="parallax">
      <section className="whoWeAreContainer">
        <div className="whoWeAreText">
          <h1 className="whoWeAreTitle">Who We Are</h1>
            <p className="whoWeAreBodyText">
              El Sistema is a philosophy of music educationcreated in Venezuela in 1975. It is the brainchild of Venezuelan musician, politician, economist and philanthropist Dr. Jose Natonio Abreu. At the rood of this philosophy is the idea that music education - specifically classical music education - can and should be used as a means of uplifting and unifying an underserved community, starting with the youth. All children over the age of 2 years are afforded the opportunity to own their own instrument, take private lessons, sing in a choir, and play in an orchestra for no cost. Most of the expenses are paid through government funding. El Sistema has touched the lives of over 2 million Venezuelan children, and over 180 nucleos have been established in virtually every town and city, no matter how rural or urban.
            </p>
            <div className="whoWeAreButton">
              <p className="whoWeAreButtonText">Read More</p>
            </div>
        </div>
      </section>


      <section className="imgContainerOne"></section>


      <section className="missionStatementContainer">
        <div className="missionStatementText">
        <h1 className="missionStatementTitle">Mission Statement</h1>
        <p className="missionStatementBodyText">
          El Sistema Pittsburgh provides Pittsburgh's youth with accessible and intensive classical music instruction. Utilizing music as a vehicle for positive change, ESPGH propmotes the development of music, cognitive and social skills, self-esteem, and community pride in youth.
        </p>
        <div className="missionStatementButton">
          <p className="missionStatementButtonText">Read More</p>
        </div>
        </div>
      </section>


      <section className="imgContainerTwo"></section>


      <section className="curriculumContainer">
        <div className="curriculumText">
          <h1 className="curriculumTitle">Curriculum</h1>
          <p className="curriculumBodyText">
            Rehersals for ESPGH are three days per week after the standard school day. On occation, there are weekend rehearsal dates to help preparedness for upcoming events. Rehearsals address balances between instrument sections and emphasize playing exactly together, matching rhythms, styles tones, and executions, such as bow strokes and articulations.
          </p>
          <div className="curriculumButton">
          <p className="curriculumButtonText">Read More</p>
        </div>
        </div>
      </section>


      <section className="imgContainerThree"></section>
     
      </div>
    </main>
  )
}
