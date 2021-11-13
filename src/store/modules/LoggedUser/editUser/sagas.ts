import { takeLatest, put, call, all } from 'redux-saga/effects';
import { updateUser } from '../../../../services/userService';
import { editUserSuccess, editUserError } from './actions';
import { Types } from './types';

function* editUser(action: any): any {

	try {
	  yield call(updateUser, action.payload);

		yield put(editUserSuccess());

	} catch (err: any) {

		console.log("error ", err);

		yield put(editUserError(err));

		action.payload.onError();
	}
}

export default function* root() {
	yield all([
    takeLatest(Types.EDIT_USER_REQUEST, editUser)
  ])
}

