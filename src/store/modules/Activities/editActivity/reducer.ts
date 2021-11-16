import { Reducer } from "redux";

import { IActivity } from "../../../../types";
import { IEditActivityState, Types } from "./types";

const INITIAL_STATE: IEditActivityState = {
  data: {} as IActivity,
  loading: false,
  errors: undefined
 
}
const activities: Reducer<IEditActivityState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.EDIT_ACTIVITY_REQUEST: 
      return {
        ...state,
        loading: true,
        errors: undefined,
      };

    case Types.EDIT_ACTIVITY_SUCCESS: 
      return {
        ...state,
        errors: undefined,
        loading: false,
        data: action.payload
      };

    case Types.EDIT_ACTIVITY_ERRORS: 
      return {
        ...state,
        errors: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}

export default activities;