import { takeLatest, put, call, all, select } from 'redux-saga/effects';
import { IState } from '../../..';
import { fetchActivitiesByIds } from '../../../../services/activitiesService';
import { IActivity } from '../../../../types';
import { SavedActivity } from '../userData/types';
import { getUserPublishedActivitiesSuccess, getUserPublishedActivitiesError } from './actions';
import { Types } from './types';

const getUserData = (state: IState) => state.userData;

function* getPublishedActivities(action: any): any {

	try {
		const response = yield call(fetchActivitiesByIds, {ids: action.payload.ids});

    const userData = yield select(getUserData);
    const savedActivities = userData.data.savedActivities || [];
    const savedActivitiesIds = savedActivities?.map((item: SavedActivity) => item.id);

    const activitiesFormatted = response.data.map((item: IActivity) => {

      if (savedActivitiesIds?.includes(item.id)){
        return {
          ...item,
          saved: true
        }
      } else {
        return item
      }
    })

		yield put(getUserPublishedActivitiesSuccess(activitiesFormatted.reverse()));

	} catch (err: any) {
    console.log("ERROR: ", err)
		yield put(getUserPublishedActivitiesError(err));

		action.payload.onError();
	}
}


export default function* root() {
	yield all([
    takeLatest(Types.GET_USER_PUBLISHED_ACTIVITIES_REQUEST, getPublishedActivities),
  ])
}

