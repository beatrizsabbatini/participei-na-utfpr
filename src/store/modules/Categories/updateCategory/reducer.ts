import { Reducer } from "redux";

import { IUpdateCategoryState, Types } from "./types";

const INITIAL_STATE: IUpdateCategoryState = {
  loading: false,
  errors: undefined
 
}
const categoryUpdate: Reducer<IUpdateCategoryState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.UPDATE_CATEGORY_REQUEST: 
      return {
        ...state,
        loading: true,
        errors: undefined,
      };

    case Types.UPDATE_CATEGORY_SUCCESS: 
      return {
        ...state,
        errors: undefined,
        loading: false,
      };

    case Types.UPDATE_CATEGORY_ERRORS: 
      return {
        ...state,
        errors: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}

export default categoryUpdate;