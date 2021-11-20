import { takeLatest, put, call, select } from 'redux-saga/effects';
import { IState } from '../../..';
import { fetchActivities } from '../../../../services/activitiesService';
import { IActivity } from '../../../../types';
import { getActivitiesError, getActivitiesSuccess } from './actions';
import { Types } from './types';

const getUserData = (state: IState) => state.userData;

function* getActivities(action: any): any {

	try {
		const response = yield call(fetchActivities, action.payload);

    const userData = yield select(getUserData);
    const savedActivities = userData.data.savedActivitiesIds;

    const activitiesFormatted = response.data.activities.map((item: IActivity) => {
      if (savedActivities.includes(item.id)){
        return {
          ...item,
          saved: true
        }
      } else {
        return item
      }
    })

		yield put(getActivitiesSuccess(activitiesFormatted.reverse()));

	} catch (err: any) {
		yield put(getActivitiesError(err));
	}
}

export default function* root() {
	yield takeLatest(Types.GET_ACTIVITIES_REQUEST, getActivities)
}

