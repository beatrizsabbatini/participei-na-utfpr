import { takeLatest, put, call, all } from 'redux-saga/effects';
import { updateUser } from '../../../../services/userService';
import { publishActivitySuccess } from '../../Activities/publishActivity/actions';
import { editUserSuccess, editUserError } from './actions';
import { Types } from './types';

function* editUser(action: any): any {

	try {
	  yield call(updateUser, action.payload);

		yield put(editUserSuccess());
    yield put(publishActivitySuccess(null));

    if (action.payload.onSuccess) action.payload.onSuccess();

	} catch (err: any) {
    console.log(err)
		yield put(editUserError(err));

		action.payload.onError();
	}
}

export default function* root() {
	yield all([
    takeLatest(Types.EDIT_USER_REQUEST, editUser)
  ])
}

