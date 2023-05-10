import { takeLatest, put, call, all } from 'redux-saga/effects';
import { Types } from './types';
import { getUserSavedActivitiesSuccess, getUserSavedActivitiesError } from './actions';
import { fetchActivitiesByIds } from '../../../../services/activitiesService';

function* getSavedActivities(action: any): any {

	try {
    console.log("Chamou getSavedActivities");
    console.log(action.payload.ids)
		const response = yield call(fetchActivitiesByIds, {ids: action.payload.ids || []});

    console.log("SUCCESS no getSavedActivities");
    const x = response.data.reverse();

    x.forEach((element: any) => {
      console.log('element id: ', element.id);
    });

		yield put(getUserSavedActivitiesSuccess(response.data.reverse()));

	} catch (err: any) {
    console.log("Fail no getSavedActivities");
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

