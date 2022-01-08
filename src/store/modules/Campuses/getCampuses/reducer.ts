import { Reducer } from "redux";
import { IGetCampusesState, Types } from "./types";

const INITIAL_STATE: IGetCampusesState = {
  loading: false,
  errors: undefined,
  data: []
}
const campuses: Reducer<IGetCampusesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_CAMPUSES_REQUEST: 
      return {
        ...state,
        loading: true,
        errors: undefined,
      };

    case Types.GET_CAMPUSES_SUCCESS: 
      console.log("Action Payload", action.payload);
      
      return {
        ...state,
        errors: undefined,
        loading: false,
        data: action.payload
      };

    case Types.GET_CAMPUSES_ERRORS: 
      return {
        ...state,
        errors: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}

export default campuses;