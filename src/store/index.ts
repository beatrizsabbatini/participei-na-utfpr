import { createStore } from 'redux';
import { IActivitiesState } from './modules/activities/types';

import rootReducer from './modules/rootReducer';
import { IUserDataState } from './modules/userData/types';

export interface IState{
  userData: IUserDataState;
  activities: IActivitiesState
}

const store = createStore(rootReducer); 

export default store;
