import {createStore} from 'redux';
import reducer from '../store/reducer';
import state from '../store/state';

let store = createStore(reducer, state);

export default store;