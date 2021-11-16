import { takeLatest, put, call, all } from 'redux-saga/effects';
import { createUser } from '../../../../services/userService';
import { createUserSuccess, createUserError } from './actions';
import { Types } from './types';


function* addNewUser(action: any): any {

	try {
		const response = yield call(createUser, action.payload);
		yield put(createUserSuccess(response.data));

    action.payload.onSuccess();

	} catch (err: any) {

		yield put(createUserError(err));

    action.payload.onError();
	}
}

export default function* root() {
	yield all([
    takeLatest(Types.CREATE_USER_REQUEST, addNewUser)
  ])
}

