import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { IActivitiesState } from './modules/activities/types';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import { IUserDataState } from './modules/userData/types';

export interface IState{
  userData: IUserDataState;
  activities: IActivitiesState
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware)); 

sagaMiddleware.run(rootSaga);

export default store;
