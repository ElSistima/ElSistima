import React, { Component } from 'react';
import '../styles/global-style.css';
import {Route, Switch} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Calendar from './Calendar';
import About from './About';
import Media from './Media';
import Blog from './Blog';
import PublicIndivBlogPost from './PublicIndivBlogPost';
import Support from './Support';
import {StripeProvider} from 'react-stripe-elements';


class App extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_XQpYW77nDK2V29K0MiP8B9u8">
      <main>
        <Header/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/about" component={About} />
            <Route path="/media" component={Media} />
            <Route exact path="/blog" component={Blog} />
            <Route path="/blog/:post_id" component={PublicIndivBlogPost} />
            <Route path="/support" component={Support} />
          </Switch>
        <Footer />
      </main>
    </StripeProvider>
    );
  }
}

export default App;
