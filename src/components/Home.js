import React from 'react';
import './../styles/mainContent.css';
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

          <blockquote>
            <p className="quote">"From the minute a child is taught to play an instrument, he's no longer poor. He is a child in progress who will become a citizen."</p>
            <div className="quoteAttribute">
              <p className="author">Dr. Jose Antonio Abreu</p>
              <p className="authorTitle">Founder of {"Venezuela's"} El Sistema</p>
            </div>
          </blockquote>
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
                <div className="eventImg"></div>
              </Link>
              <p className="eventDate">June 12th</p>
              <p className="eventName">Jazz Vilin "The Pittsburgh Way"</p>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
