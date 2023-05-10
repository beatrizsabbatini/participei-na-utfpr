import { takeLatest, put, call, select, takeEvery } from 'redux-saga/effects';
import { IState } from '../../..';
import { fetchActivities } from '../../../../services/activitiesService';
import { IActivity } from '../../../../types';
import { SavedActivity } from '../../LoggedUser/userData/types';
import { getActivitiesError, getActivitiesSuccess } from './actions';
import { Types } from './types';

const getUserData = (state: IState) => state.userData;

function* getActivities(action: any): any {

	try {
		const response = yield call(fetchActivities, action.payload);

    const userData = yield select(getUserData);

    const savedActivities = userData.data.savedActivities || [];
    const savedActivitiesIds = savedActivities?.map((item: SavedActivity) => item.id);

    const removeHiddenActivities = response.data.activities.filter((item: IActivity) => !item.hidden);

    const activitiesFormatted = removeHiddenActivities.map((item: IActivity) => {
      if (savedActivitiesIds?.includes(item.id)){
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
    console.log("ERROR getting activities: ", err)
		yield put(getActivitiesError(err));
	}
}

export default function* root() {
	yield takeLatest(Types.GET_ACTIVITIES_REQUEST, getActivities)
}

