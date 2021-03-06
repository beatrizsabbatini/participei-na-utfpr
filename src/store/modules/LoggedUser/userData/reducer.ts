import { Reducer } from "redux";
import { IUserDataState, Types, Image } from "./types";

const INITIAL_STATE: IUserDataState = {
  data: {
    name: '',
    ra: 0,
    campusId: '',
    image: {} as Image,
    certificate: {} as Image,
    email: '',
    publishedActivitiesIds: [],
    savedActivities: [],
    group1Points: 0,
    group2Points: 0,
    group3Points: 0,
    uid: '',
    _id: ''
  },
  loading: false,
  errors: undefined
 
}
const userData: Reducer<IUserDataState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_USER_DATA_REQUEST: 
      return {
        ...state,
        loading: true,
        errors: undefined,
      };

    case Types.GET_USER_DATA_SUCCESS: 
      return {
        ...state,
        errors: undefined,
        loading: false,
        data: action.payload
      };

    case Types.GET_USER_DATA_ERRORS: 
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