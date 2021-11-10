import { takeLatest, put, call, all } from 'redux-saga/effects';
import { fetchUser } from '../../../services/userService';
import { getUserDataSuccess, getUserDataError } from './actions';
import { Types } from './types';

function* getUser(action: any): any {

	try {
		const response = yield call(fetchUser, action.payload.uid);

		yield put(getUserDataSuccess(response.data));

	} catch (err: any) {

		console.log("error ", err);

		yield put(getUserDataError(err));

		action.payload.onError();
	}
}

export default function* root() {
	yield all([
    takeLatest(Types.GET_USER_DATA_REQUEST, getUser)
  ])
}

