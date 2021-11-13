import { all } from 'redux-saga/effects';

import getActivitiesSagas from './Activities/getActivities/sagas';
import publishActivitySagas from './Activities/publishActivity/sagas';
import userDataSagas from './LoggedUser/userData/sagas';
import editUserSagas from './LoggedUser/editUser/sagas';
import loggedUserPublishedActivitiesSagas from './LoggedUser/publishedActivities/sagas';
import loggedUserSavedActivitiesSagas from './LoggedUser/savedActivities/sagas';

export default function* rootSaga() {
	yield all([
		getActivitiesSagas(),
		publishActivitySagas(),
		userDataSagas(),
    editUserSagas(),
    loggedUserPublishedActivitiesSagas(),
    loggedUserSavedActivitiesSagas()
	]);
}