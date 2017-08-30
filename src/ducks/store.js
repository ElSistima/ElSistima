import {compose, createStore} from 'redux';
import reducer from './reducer';

let store = compose(createStore)(reducer);

export default store;
