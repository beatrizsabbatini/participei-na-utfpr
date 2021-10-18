import { combineReducers } from 'redux';

import userData from './userData/reducer';

const rootReducer = combineReducers({
  userData
});

export default rootReducer;