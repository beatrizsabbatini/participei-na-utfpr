import { all } from 'redux-saga/effects';

import getActivitiesSagas from './Activities/getActivities/sagas';
import publishActivitySagas from './Activities/publishActivity/sagas';
import editActivitySagas from './Activities/editActivity/sagas';
import userDataSagas from './LoggedUser/userData/sagas';
import editUserSagas from './LoggedUser/editUser/sagas';
import createUserSagas from './SignUp/createUser/sagas';
import loggedUserPublishedActivitiesSagas from './LoggedUser/publishedActivities/sagas';
import loggedUserSavedActivitiesSagas from './LoggedUser/savedActivities/sagas';
import campusesSagas from './Campuses/getCampuses/sagas';

export default function* rootSaga() {
	yield all([
		getActivitiesSagas(),
		publishActivitySagas(),
    createUserSagas(),
    editActivitySagas(),
		userDataSagas(),
    editUserSagas(),
    loggedUserPublishedActivitiesSagas(),
    loggedUserSavedActivitiesSagas(),
    campusesSagas()
	]);
}