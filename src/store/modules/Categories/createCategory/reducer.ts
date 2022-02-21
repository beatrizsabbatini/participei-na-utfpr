import { Reducer } from "redux";

import { ICreateCategoryState, Types } from "./types";

const INITIAL_STATE: ICreateCategoryState = {
  loading: false,
  errors: undefined
 
}
const categoryCreation: Reducer<ICreateCategoryState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.CREATE_CATEGORY_REQUEST: 
      return {
        ...state,
        loading: true,
        errors: undefined,
      };

    case Types.CREATE_CATEGORY_SUCCESS: 
      return {
        ...state,
        errors: undefined,
        loading: false,
      };

    case Types.CREATE_CATEGORY_ERRORS: 
      return {
        ...state,
        errors: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}

export default categoryCreation;