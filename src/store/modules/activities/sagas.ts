import { takeLatest, put, call, all } from 'redux-saga/effects';
import { fetchActivities } from '../../../services/activitiesService';
import { getActivitiesError, getActivitiesSuccess } from './actions';
import { Types } from './types';

function* getActivities(action: any): any {

	try {
		const response = yield call(fetchActivities, action.payload);

		yield put(getActivitiesSuccess(response.data.activities.reverse()));

	} catch (err: any) {
		yield put(getActivitiesError(err));
	}
}

export default function* root() {
	yield takeLatest(Types.GET_ACTIVITIES_REQUEST, getActivities)
}

