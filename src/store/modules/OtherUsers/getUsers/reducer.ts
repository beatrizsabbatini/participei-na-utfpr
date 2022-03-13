import { Reducer } from "redux";
import { IUsersState, Types } from "./types";

const INITIAL_STATE: IUsersState = {
  data: [],
  loading: false,
  errors: undefined
 
}
const otherUsersData: Reducer<IUsersState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_USERS_REQUEST: 
      return {
        ...state,
        loading: true,
        errors: undefined,
      };

    case Types.GET_USERS_SUCCESS: 
      return {
        ...state,
        errors: undefined,
        loading: false,
        data: action.payload
      };

    case Types.GET_USERS_ERRORS: 
      return {
        ...state,
        errors: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}

export default otherUsersData;