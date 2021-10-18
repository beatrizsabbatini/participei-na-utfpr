import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import { IUserDataState } from './modules/userData/types';

export interface IState{
  userData: IUserDataState;
}

// const sagaMiddleware = createSagaMiddleware();

// const middlewares = [sagaMiddleware];

const store = createStore(rootReducer); //, applyMiddleware(...middlewares)

// sagaMiddleware.run();

export default store;
