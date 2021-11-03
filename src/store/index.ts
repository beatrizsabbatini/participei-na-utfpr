import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import { IActivitiesState } from './modules/activities/types';
import { IUserDataState } from './modules/userData/types';
import { IPublishActivityState } from './modules/publishActivity/types';

export interface IState{
  userData: IUserDataState;
  activities: IActivitiesState;
  publishActivity: IPublishActivityState;
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware)); 

sagaMiddleware.run(rootSaga);

export default store;
