import { takeLatest, put, call, all } from 'redux-saga/effects';
import { editActivity } from '../../../../services/activitiesService';
import { editActivitySuccess, editActivityError } from './actions';
import { Types } from './types';


function* editOneActivity(action: any): any {

	try {
		const response = yield call(editActivity, action.payload);
		yield put(editActivitySuccess(response.data));

		action.payload.onSuccess();

	} catch (err: any) {

		yield put(editActivityError(err));

		action.payload.onError();
	}
}

export default function* root() {
	yield all([
    takeLatest(Types.EDIT_ACTIVITY_REQUEST, editOneActivity)
  ])
}

