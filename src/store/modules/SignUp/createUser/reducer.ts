import { Reducer } from "redux";

import { IUserData } from "../../LoggedUser/userData/types";
import { ICreateUserState, Types } from "./types";

const INITIAL_STATE: ICreateUserState = {
  data: {} as IUserData,
  loading: false,
  errors: undefined
 
}
const activities: Reducer<ICreateUserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.CREATE_USER_REQUEST: 
      return {
        ...state,
        loading: true,
        errors: undefined,
      };

    case Types.CREATE_USER_SUCCESS: 
      return {
        ...state,
        errors: undefined,
        loading: false,
        data: action.payload
      };

    case Types.CREATE_USER_ERRORS: 
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