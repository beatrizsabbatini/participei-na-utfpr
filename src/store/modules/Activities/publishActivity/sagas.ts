import { takeLatest, put, call, all } from 'redux-saga/effects';
import { createActivity } from '../../../../services/activitiesService';
import { publishActivityError, publishActivitySuccess } from './actions';
import { Types } from './types';


function* publishActivity(action: any): any {

	try {
		const response = yield call(createActivity, action.payload.activity);
		yield put(publishActivitySuccess(response.data));

		action.payload.onSuccess();

	} catch (err: any) {

		yield put(publishActivityError(err));

		action.payload.onError();
	}
}

export default function* root() {
	yield all([
    takeLatest(Types.PUBLISH_ACTIVITY_REQUEST, publishActivity)
  ])
}

