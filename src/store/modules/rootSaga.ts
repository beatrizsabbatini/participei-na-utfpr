import { all } from 'redux-saga/effects';

import activitiesSagas from './activities/sagas';

export default function* rootSaga() {
	yield all([
		activitiesSagas()
	]);
}