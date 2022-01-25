import { Reducer } from "redux";
import { IUserDataState, Types } from "./types";

const INITIAL_STATE: IUserDataState = {
  data: {
    name: '',
    ra: 0,
    campusId: '',
    image: '',
    email: '',
    publishedActivitiesIds: [],
    group1Points: 0,
    group2Points: 0,
    group3Points: 0,
    uid: '',
    _id: ''
  },
  loading: false,
  errors: undefined
 
}
const otherUsersData: Reducer<IUserDataState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_OTHER_USERS_DATA_REQUEST: 
      return {
        ...state,
        loading: true,
        errors: undefined,
      };

    case Types.GET_OTHER_USERS_DATA_SUCCESS: 
      return {
        ...state,
        errors: undefined,
        loading: false,
        data: action.payload
      };

    case Types.GET_OTHER_USERS_DATA_ERRORS: 
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