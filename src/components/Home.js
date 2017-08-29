import React from 'react';
import './../styles/mainContent.css';
import './../styles/home.css';

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
    </main>
  )
}
