import { combineReducers } from 'redux';

import userData from './userData/reducer';
import activities from './activities/reducer';

const rootReducer = combineReducers({
  userData,
  activities
});

export default rootReducer;