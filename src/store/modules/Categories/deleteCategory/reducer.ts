import { Reducer } from "redux";

import { IDeleteCategoryState, Types } from "./types";

const INITIAL_STATE: IDeleteCategoryState = {
  loading: false,
  errors: undefined
 
}
const categoryUpdate: Reducer<IDeleteCategoryState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.DELETE_CATEGORY_REQUEST: 
      return {
        ...state,
        loading: true,
        errors: undefined,
      };

    case Types.DELETE_CATEGORY_SUCCESS: 
      return {
        ...state,
        errors: undefined,
        loading: false,
      };

    case Types.DELETE_CATEGORY_ERRORS: 
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