import { takeLatest, put, call, all } from 'redux-saga/effects';
import { Types } from './types';
import { getUserDataSuccess, getUserDataError } from './actions';
import { fetchUser } from '../../../../services/userService';

function* getUser(action: any): any {

	try {
    console.log("Chamou MOZAO AAAAAAAAAAAAAAAAAAAAAAAAAAOOOOOOOOOOOOOOOOOOOOOOOO");
		const response = yield call(fetchUser, action.payload.id);

    console.log("response: ", response);

    console.log("response.data.savedActivities: ", response.data.savedActivities);

		yield put(getUserDataSuccess(response.data));
    console.log("Success no getUser");

	} catch (err: any) {
    console.log("Fail getUser", err);
		yield put(getUserDataError(err));

		action.payload.onError();
	}
}


export default function* root() {
	yield all([
    takeLatest(Types.GET_USER_DATA_REQUEST, getUser),
  ])
}

