import { combineReducers } from 'redux';

import userData from './userData/reducer';
import activities from './activities/reducer';
import publishActivity from './publishActivity/reducer';

const rootReducer = combineReducers({
  userData,
  activities,
  publishActivity
});

export default rootReducer;