import {compose, createStore} from 'redux';
import reducer from './reducer';
import {autoRehydrate, persistStore} from 'redux-persist';

let store = compose(autoRehydrate())(createStore)(reducer);

persistStore(store)

export default store;
