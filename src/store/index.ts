import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import { IActivitiesState } from './modules/Activities/getActivities/types';
import { IUserDataState } from './modules/LoggedUser/userData/types';
import { IPublishedActivitiesState } from './modules/LoggedUser/publishedActivities/types';
import { ISavedActivitiesState } from './modules/LoggedUser/savedActivities/types';
import { IPublishActivityState } from './modules/Activities/publishActivity/types';

export interface IState{
  userData: IUserDataState;
  activities: IActivitiesState;
  publishActivity: IPublishActivityState;
  loggedUserPublishedActivities: IPublishedActivitiesState;
  loggedUserSavedActivities: ISavedActivitiesState;
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware)); 

sagaMiddleware.run(rootSaga);

export default store;
