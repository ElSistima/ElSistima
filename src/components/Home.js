import React from 'react';
import './../styles/home.css';
import {Link} from 'react-router-dom';

export default function Home (props) {
  return (
    <main className="mainContent">
      <section className="homeBanner">
        <div className="quoteContainer">
          <div className="socialIconsQuote">
            <a href="https://www.facebook.com/ElSistemaPittsburgh/" target="_blank">
              <div className="socialCircleQuote"><i className="fa fa-facebook fa-fw" aria-hidden="true"></i></div>
            </a>

            <a href="https://twitter.com/elsistema" target="blank">
              <div className="socialCircleQuote"><i className="fa fa-twitter fa-fw" aria-hidden="true"></i></div>
            </a>

            <a href="https://www.linkedin.com/company/3276954/" target="_blank">
              <div className="socialCircleQuote"><i className="fa fa-linkedin fa-fw" aria-hidden="true"></i></div>
            </a>
          </div>


          <div className="blockquote">
            <p className="quote">"From the minute a child is taught to play an instrument, he's no longer poor. He is a child in progress who will become a citizen."</p>
            <div className="quoteAttribute">
              <p className="author">Dr. Jose Antonio Abreu</p>
              <p className="authorTitle">Founder of {"Venezuela's"} El Sistema</p>
            </div>
          </div>
        </div>
      </section>

      <section className="upcomingEvents">
        <div className="eventsContainer">
          <div className="eventsHeaderContainer"><p className="eventsHeader">Upcoming Events  |  </p>
          <Link to="/calendar" className="linkedButton">
            <div className="seeMoreButton">
              <p className="seeMoreButtonText">See More</p>
            </div>
          </Link>
          </div>

          <div className="eventsPreviewsContainer">
            <div className="eventPreview">
              <Link to="/calendar">
                <div className="eventImg previewOne"></div>
              </Link>
              <p className="eventDate">June 12th</p>
              <p className="eventName">Jazz Violin "The Pittsburgh Way"</p>
            </div>

            <div className="eventPreview">
              <Link to="/calendar">
                <div className="eventImg previewTwo"></div>
              </Link>
              <p className="eventDate">June 24th</p>
              <p className="eventName">Pittsburgh Carnival Showcase 2017!</p>
            </div>

            <div className="eventPreview">
              <Link to="/calendar">
                <div className="eventImg previewThree"></div>
              </Link>
              <p className="eventDate">July 30th</p>
              <p className="eventName">Family Night Performance</p>
            </div>
          </div>
        </div>
      </section>

      <section className="orgMission">
        <div className="orgMissionImgContainer">
          <div className="floatingMissionDiv">
            <div className="floatingMissionText">El Sistema Pittsburg provides {"Pittsburgh's"} youth with accessible and instensive classical music instruction.</div>
          </div>
        </div>
      </section>

      <section className="orgCoreValues">
        <div className="coreValuesContainer">
          <div className="coreValuesTop">
            <div className="coreValuesImgDivOne">
              <div className="coreValuesTextOne">
                <p className="valuesTextBlock">El Sistema Pittsburgh is grateful for our family of supporters. Partnerships with individual donors, corporations, government agencies, and foundations ensure that music education programs are available to young musicians in every neighborhood, regardless of socio-economic circumstance. Every dollar dontated to ESPGH helps change {"kids'"} lives through music.</p>
                <Link to="/support" className="linkedButton">
                  <div className="coreValuesButton">
                  <p className="supportUsButtonText">Support Us</p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="coreValuesTextTwo">
              <div className="valuesTextBlock textBlockTwo">
                <p className="textBlockTwoHeader">Vision</p>
                <p className="textBlockTwoText">for the future</p>
                <br />
                <p className="textBlockTwoText">
                  Over time, El Sistema Pittsburgh will create a network of El Sistema-inspired nucleos, or community locations, throughout the city and the region. Each will have a unique, community-based approach to realizing core values at the heart of our mission. Every child in ESPGH will be treated as a "key player." The orchestra will grow as a tight-knit community devoted to cultivating responsible citizens within and beyond the orchestra.
                </p>
              </div>
            </div>

          </div>

          <div className="coreValuesBottom">
          <div className="coreValuesImgDivTwo">
            <div className="coreValuesTextThree">
            <p className="textBlockThreeHeader">El Sistema Core Values</p>
              <ul className="valuesTextBlock">
                <div className="valuesItem">
                  <i className="fa fa-music fa-fw" aria-hidden="true"></i><p className="valuesListItemText">Music education as social change</p>
                </div>
                <div className="valuesItem">
                  <i className="fa fa-music fa-fw" aria-hidden="true"></i><p className="valuesListItemText">Accessibility</p>
                </div>
                <div className="valuesItem">
                  <i className="fa fa-music fa-fw" aria-hidden="true"></i><p className="valuesListItemText">High standards of musical excellence</p>
                </div>
                <div className="valuesItem">
                  <i className="fa fa-music fa-fw" aria-hidden="true"></i><p className="valuesListItemText">Community</p>
                </div>
              </ul>
              <Link to="/about" className="linkedButton">
                <div className="coreValuesButton"><p className="supportUsButtonText">Read More</p>
                </div>
              </Link>

            </div>
          </div>

          <div className="coreValuesTextFour">
            <div className="valuesTextBlock textBlockFour">
              <p className="textBlockFourHeader">Registration</p>
              <p className="textBlockTwoText">Registration is open!</p>
              <br />
              <p className="textBlockFourText">
                To sign up for El {"Sistema's"} after-school program, registration forms are available for pickup at the Pittsburgh Public Schools.
              </p>
              <br />
              <p className="textBlockFourText">
                For all students outside of the school district, they are able to join with a tuition cost.
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>
    </main>
  )
}
