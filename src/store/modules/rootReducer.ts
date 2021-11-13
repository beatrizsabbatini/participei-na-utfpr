import { combineReducers } from 'redux';

import userData from './LoggedUser/userData/reducer';
import loggedUserPublishedActivities from './LoggedUser/publishedActivities/reducer';
import loggedUserSavedActivities from './LoggedUser/savedActivities/reducer';
import activities from './Activities/getActivities/reducer';
import publishActivity from './Activities/publishActivity/reducer';

const rootReducer = combineReducers({
  userData,
  activities,
  publishActivity,
  loggedUserPublishedActivities,
  loggedUserSavedActivities,
});

export default rootReducer;