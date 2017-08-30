import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css';
import './styles/index.css';
import App from './components/App';
import {Provider} from 'react-redux';
import store from './ducks/store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AdminPortal from './components/AdminPortal';

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
  <Switch>
    <Route path="/admin" component={AdminPortal} />
        <App />
  </Switch>
  </Provider>

  </BrowserRouter>, document.getElementById('root'));
