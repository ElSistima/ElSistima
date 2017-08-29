import React, { Component } from 'react';
import '../styles/global-style.css';
import {Route, Switch} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Calendar from './Calendar';
import About from './About';
import Media from './Media';
import PublicBlog from './PublicBlog';
import Support from './Support';


class App extends Component {
  render() {
    return (
      <main>
        <Header/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/about" component={About} />
            <Route path="/media" component={Media} />
            <Route path="/blog" component={PublicBlog} />
            <Route path="/support" component={Support} />
          </Switch>
        <Footer />
      </main>
    );
  }
}

export default App;
