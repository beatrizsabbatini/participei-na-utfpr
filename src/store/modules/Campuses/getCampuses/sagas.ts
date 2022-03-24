import { takeLatest, put, call, all } from 'redux-saga/effects';

import { fetchCampuses } from '../../../../services/campusesService';
import { getCampusesSuccess, getCampusesError } from './actions';
import { Types } from './types';

function* getCampuses(action: any): any {

	try {

    const response = yield call(fetchCampuses);

    const responseWithLabel = response.data.map((item: any) => (
      {
        ...item, 
        label: item.city,
        value: item.id
      }
      ))

    const formattedResponse = [
      {
        id: 0,
        label: '',
        placeholder: true,
        value: '',
      },
      ...responseWithLabel
    ]

    yield put(getCampusesSuccess(formattedResponse));

	} catch (err: any) {
    console.log("ERROR getting campuses: ", err)
		yield put(getCampusesError(err));

		action.payload.onError();
	}
}

export default function* root() {
	yield all([
    takeLatest(Types.GET_CAMPUSES_REQUEST, getCampuses)
  ])
}

