import { takeLatest, put, call, all } from 'redux-saga/effects';

import { fetchCampuses } from '../../../../services/campusesService';
import { getCampusesSuccess, getCampusesError } from './actions';
import { Types } from './types';

function* getCampuses(action: any): any {

	try {
    const response = yield call(fetchCampuses);

    yield put(getCampusesSuccess(response.data));

	} catch (err: any) {

		yield put(getCampusesError(err));

		action.payload.onError();
	}
}

export default function* root() {
	yield all([
    takeLatest(Types.GET_CAMPUSES_REQUEST, getCampuses)
  ])
}

