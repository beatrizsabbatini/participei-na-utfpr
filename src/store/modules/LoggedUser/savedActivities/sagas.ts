import { takeLatest, put, call, all } from 'redux-saga/effects';
import { Types } from './types';
import { getUserSavedActivitiesSuccess, getUserSavedActivitiesError } from './actions';
import { fetchActivitiesByIds } from '../../../../services/activitiesService';

function* getSavedActivities(action: any): any {

	try {
		const response = yield call(fetchActivitiesByIds, {ids: action.payload.ids || []});

		yield put(getUserSavedActivitiesSuccess(response.data.reverse()));

	} catch (err: any) {

    console.log(err)

		yield put(getUserSavedActivitiesError(err));

		action.payload.onError();
	}
}


export default function* root() {
	yield all([
    takeLatest(Types.GET_USER_SAVED_ACTIVITIES_REQUEST, getSavedActivities),
  ])
}

