import { takeLatest, put, call, all } from 'redux-saga/effects';
import { Types } from './types';
import { getOtherUsersDataSuccess, getOtherUsersDataError } from './actions';
import { fetchUser } from '../../../../services/userService';

function* getUserData(action: any): any {

	try {
		const response = yield call(fetchUser, action.payload.id);

		yield put(getOtherUsersDataSuccess(response.data));

	} catch (err: any) {

		yield put(getOtherUsersDataError(err));

		action.payload.onError();
	}
}


export default function* root() {
	yield all([
    takeLatest(Types.GET_OTHER_USERS_DATA_REQUEST, getUserData),
  ])
}

