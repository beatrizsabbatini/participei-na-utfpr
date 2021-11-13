import { takeLatest, put, call, all } from 'redux-saga/effects';
import { fetchActivitiesByIds } from '../../../../services/activitiesService';
import { getUserPublishedActivitiesSuccess, getUserPublishedActivitiesError } from './actions';
import { Types } from './types';

function* getPublishedActivities(action: any): any {

	try {
		const response = yield call(fetchActivitiesByIds, {ids: action.payload.ids || []});

		yield put(getUserPublishedActivitiesSuccess(response.data.reverse()));

	} catch (err: any) {

		yield put(getUserPublishedActivitiesError(err));

		action.payload.onError();
	}
}


export default function* root() {
	yield all([
    takeLatest(Types.GET_USER_PUBLISHED_ACTIVITIES_REQUEST, getPublishedActivities),
  ])
}

