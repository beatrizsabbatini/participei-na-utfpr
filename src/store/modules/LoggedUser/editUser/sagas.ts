import { takeLatest, put, call, all } from 'redux-saga/effects';
import { updateUser } from '../../../../services/userService';
import { publishActivitySuccess } from '../../Activities/publishActivity/actions';
import { editUserSuccess, editUserError } from './actions';
import { Types } from './types';

function* editUser(action: any): any {

  console.log("no editUser antes do try: ", action.payload)
	try {
	  yield call(updateUser, action.payload);

    console.log("no editUser: ", action.payload)

		yield put(editUserSuccess());
    yield put(publishActivitySuccess(null));

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

