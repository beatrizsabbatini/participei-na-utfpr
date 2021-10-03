// Action Types
export const Types = {
  LOGIN_REQUEST: "login/login request",
  LOGIN_SUCCESS: "login/login success",
  LOGIN_ERRORS: "login/login errors",
};
//Initial state
const initialState = {
  loading: false,
  errors: undefined
};
//Reducer
export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        errors: undefined,
      };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        errors: undefined,
        loading: false,
      };

    case Types.LOGIN_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };


    default:
      return state;
  }
}

// Action Creators
export function loginRequest() {
  return {
    type: Types.LOGIN_REQUEST,
  };
}

export function loginSuccess(userData: any) {
  return {
    type: Types.LOGIN_SUCCESS,
    payload: userData
  };
}

export function loginErrors(errors: any) {
  return {
    type: Types.LOGIN_ERRORS,
    payload: errors
  };
}
