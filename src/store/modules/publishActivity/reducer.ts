import { Reducer } from "redux";

import { IActivity } from "../../../types";
import { IPublishActivityState, Types } from "./types";

const INITIAL_STATE: IPublishActivityState = {
  data: {} as IActivity,
  loading: false,
  errors: undefined
 
}
const activities: Reducer<IPublishActivityState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.PUBLISH_ACTIVITY_REQUEST: 
      return {
        ...state,
        loading: true,
        errors: undefined,
      };

    case Types.PUBLISH_ACTIVITY_SUCCESS: 
      return {
        ...state,
        errors: undefined,
        loading: false,
        data: action.payload
      };

    case Types.PUBLISH_ACTIVITY_ERRORS: 
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