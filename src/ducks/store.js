import { createStore } from 'redux';
import reducer from './reducer';
import promise from 'redux-promise-middleware';


let store = createStore(reducer);

export default store;
