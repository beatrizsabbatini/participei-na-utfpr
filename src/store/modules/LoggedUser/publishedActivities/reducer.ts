import { Reducer } from "redux";
import { IPublishedActivitiesState, Types } from "./types";

const INITIAL_STATE: IPublishedActivitiesState = {
  data: [],
  loading: false,
  errors: undefined
 
}
const userData: Reducer<IPublishedActivitiesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_USER_PUBLISHED_ACTIVITIES_REQUEST: 
      return {
        ...state,
        loading: true,
        errors: undefined,
      };

    case Types.GET_USER_PUBLISHED_ACTIVITIES_SUCCESS: 
      return {
        ...state,
        errors: undefined,
        loading: false,
        data: action.payload
      };

    case Types.GET_USER_PUBLISHED_ACTIVITIES_ERRORS: 
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