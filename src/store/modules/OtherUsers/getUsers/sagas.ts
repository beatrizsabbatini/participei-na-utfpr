import { takeLatest, put, call, all } from 'redux-saga/effects';
import { Types } from './types';
import { getUsersSuccess, getUsersError } from './actions';
import { fetchUsers } from '../../../../services/userService';

function* getUsers(action: any): any {

	try {
		const response = yield call(fetchUsers);

		yield put(getUsersSuccess(response.data));

	} catch (err: any) {

		yield put(getUsersError(err));

		action.payload.onError();
	}
}

export default function* root() {
	yield all([
    takeLatest(Types.GET_USERS_REQUEST, getUsers),
  ])
}

