import { all } from 'redux-saga/effects';

import activitiesSagas from './activities/sagas';
import publishActivitySagas from './publishActivity/sagas';
import userDataSagas from './userData/sagas';

export default function* rootSaga() {
	yield all([
		activitiesSagas(),
		publishActivitySagas(),
		userDataSagas()
	]);
}