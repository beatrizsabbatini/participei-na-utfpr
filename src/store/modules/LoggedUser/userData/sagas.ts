import { takeLatest, put, call, all } from 'redux-saga/effects';
import { Types } from './types';
import { getUserDataSuccess, getUserDataError } from './actions';
import { fetchUser } from '../../../../services/userService';

function* getUser(action: any): any {

  console.log("ACTION.PAYLOAD: ",  action.payload);

	try {
		const response = yield call(fetchUser, action.payload.id);

    console.log("response fetching user: ",  response.data);

		yield put(getUserDataSuccess(response.data));

	} catch (err: any) {

		yield put(getUserDataError(err));
    console.log("ERROR FETCHING USER: ", err);

		action.payload.onError();
	}
}


export default function* root() {
	yield all([
    takeLatest(Types.GET_USER_DATA_REQUEST, getUser),
  ])
}

