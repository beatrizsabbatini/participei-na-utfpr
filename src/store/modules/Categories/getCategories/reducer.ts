import { Reducer } from "redux";

import { IGetCategoriesState, Types } from "./types";

const INITIAL_STATE: IGetCategoriesState = {
  categories: [],
  loading: false,
  errors: undefined
 
}
const categoriesFetch: Reducer<IGetCategoriesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_CATEGORIES_REQUEST: 
      return {
        ...state,
        loading: true,
        errors: undefined,
      };

    case Types.GET_CATEGORIES_SUCCESS: 
      return {
        ...state,
        errors: undefined,
        loading: false,
        categories: action.payload
      };

    case Types.GET_CATEGORIES_ERRORS: 
      return {
        ...state,
        errors: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}

export default categoriesFetch;