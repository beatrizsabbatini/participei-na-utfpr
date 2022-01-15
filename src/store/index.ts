import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import { IUserDataState } from './modules/LoggedUser/userData/types';
import { IPublishedActivitiesState } from './modules/LoggedUser/publishedActivities/types';
import { ISavedActivitiesState } from './modules/LoggedUser/savedActivities/types';
import { IEditUserState } from './modules/LoggedUser/editUser/types';
import { IActivitiesState } from './modules/Activities/getActivities/types';
import { IPublishActivityState } from './modules/Activities/publishActivity/types';
import { IEditActivityState } from './modules/Activities/editActivity/types';
import { ICreateUserState } from './modules/SignUp/createUser/types';
import { IGetCampusesState } from './modules/Campuses/getCampuses/types';

export interface IState{
  userData: IUserDataState;
  otherUsersData: IUserDataState;
  activities: IActivitiesState;
  publishActivity: IPublishActivityState;
  loggedUserPublishedActivities: IPublishedActivitiesState;
  loggedUserSavedActivities: ISavedActivitiesState;
  editUser: IEditUserState;
  editActivity: IEditActivityState;
  createUser: ICreateUserState;
  campuses: IGetCampusesState;
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware)); 

sagaMiddleware.run(rootSaga);

export default store;
