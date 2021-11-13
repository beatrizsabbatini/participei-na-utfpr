import { takeLatest, put, call, all } from 'redux-saga/effects';
import { fetchActivitiesByIds } from '../../../../services/activitiesService';
import { getUserPublishedActivitiesSuccess, getUserPublishedActivitiesError } from './actions';
import { Types } from './types';

function* getPublishedActivities(action: any): any {

	try {
		const response = yield call(fetchActivitiesByIds, {ids: action.payload.ids || []});

    console.log("RESPONSE: ", response.data)

		yield put(getUserPublishedActivitiesSuccess(response.data));

	} catch (err: any) {

    console.log("Erro ao buscar atividades publicadas!");
    console.log(err)

		yield put(getUserPublishedActivitiesError(err));

		action.payload.onError();
	}
}


export default function* root() {
	yield all([
    takeLatest(Types.GET_USER_PUBLISHED_ACTIVITIES_REQUEST, getPublishedActivities),
  ])
}

