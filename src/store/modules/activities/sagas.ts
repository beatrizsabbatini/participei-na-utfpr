import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchActivities } from '../../../services/activitiesService';
import { getActivitiesError, getActivitiesSuccess } from './actions';
import { Types } from './types';

function* getActivities({title}: any): any {

	try {

		const response = yield call(fetchActivities, title);

		yield put(getActivitiesSuccess(response.data));

	} catch (err: any) {

		yield put(getActivitiesError(err));
	}
}

export default function* root() {
	yield takeLatest(Types.GET_ACTIVITIES_REQUEST, getActivities)
}