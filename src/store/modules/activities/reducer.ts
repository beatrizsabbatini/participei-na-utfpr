import { Reducer } from "redux";
import { IActivitiesState, Types } from "./types";

const INITIAL_STATE: IActivitiesState = {
  data: [],
  loading: false,
  errors: undefined
 
}
const activities: Reducer<IActivitiesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_ACTIVITIES_REQUEST: 
      return {
        ...state,
        loading: true,
        errors: undefined,
        data: action.payload
      };

    case Types.GET_ACTIVITIES_SUCCESS: 
      return {
        ...state,
        errors: undefined,
        loading: false,
        data: action.payload
      };

    case Types.GET_ACTIVITIES_ERRORS: 
      return {
        ...state,
        errors: action.payload,
        loading: false,
        data: []
      };

    default:
      return state;
  }
}

export default activities;