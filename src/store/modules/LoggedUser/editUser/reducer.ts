import { Reducer } from "redux";
import { IEditUserState, Types } from "./types";

const INITIAL_STATE: IEditUserState = {
  loading: false,
  errors: undefined
 
}
const userData: Reducer<IEditUserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.EDIT_USER_REQUEST: 
      return {
        ...state,
        loading: true,
        errors: undefined,
      };

    case Types.EDIT_USER_SUCCESS: 
      return {
        ...state,
        errors: undefined,
        loading: false,
        data: action.payload
      };

    case Types.EDIT_USER_ERRORS: 
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