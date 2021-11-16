import { combineReducers } from 'redux';

import userData from './LoggedUser/userData/reducer';
import loggedUserPublishedActivities from './LoggedUser/publishedActivities/reducer';
import loggedUserSavedActivities from './LoggedUser/savedActivities/reducer';
import editUser from './LoggedUser/editUser/reducer';
import activities from './Activities/getActivities/reducer';
import publishActivity from './Activities/publishActivity/reducer';
import editActivity from './Activities/editActivity/reducer';
import createUser from './SignUp/createUser/reducer';

const appReducer = combineReducers({
  userData,
  createUser,
  editUser,
  activities,
  publishActivity,
  editActivity,
  loggedUserPublishedActivities,
  loggedUserSavedActivities,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'USER_LOGOUT') {

    return appReducer(undefined, action)
  }

  return appReducer(state, action)
}

export default rootReducer;