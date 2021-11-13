import { Reducer } from "redux";
import { ISavedActivitiesState, Types } from "./types";

const INITIAL_STATE: ISavedActivitiesState = {
  data: [],
  loading: false,
  errors: undefined
 
}
const userData: Reducer<ISavedActivitiesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_USER_SAVED_ACTIVITIES_REQUEST: 
      return {
        ...state,
        loading: true,
        errors: undefined,
      };

    case Types.GET_USER_SAVED_ACTIVITIES_SUCCESS: 
      return {
        ...state,
        errors: undefined,
        loading: false,
        data: action.payload
      };

    case Types.GET_USER_SAVED_ACTIVITIES_ERRORS: 
      return {
        ...state,
        errors: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}

export default userData;