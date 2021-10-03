import { createStore, combineReducers } from 'redux';

import login from './ducks/login';
import myTopics from './ducks/myTopics';

const reducers = combineReducers({
  login,
  myTopics
});

const store = createStore(reducers);

export default store;
