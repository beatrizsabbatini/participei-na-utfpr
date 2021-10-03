// Action Types
export const Types = {
  GET_MY_TOPICS_REQUEST: "myTopics/get my topics request",
  GET_MY_TOPICS_SUCCESS: "myTopics/get my topics success",
  GET_MY_TOPICS_ERRORS: "myTopics/get my topics errors",
};
//Initial state
const initialState = {
  topics: undefined,
  loading: false,
  errors: undefined
};
//Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_MY_TOPICS_REQUEST:
      return {
        ...state,
        loading: true,
        errors: undefined,
      };
    case Types.GET_MY_TOPICS_SUCCESS:
      return {
        ...state,
        errors: undefined,
        loading: false,
        topics: action.payload
      };

    case Types.GET_MY_TOPICS_ERRORS:
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
export function getMyTopicsRequest() {
  return {
    type: Types.GET_MY_TOPICS_REQUEST,
  };
}

export function getMyTopicsSuccess(topics) {
  return {
    type: Types.GET_MY_TOPICS_SUCCESS,
    payload: topics
  };
}

export function getMyTopicsErrors(errors) {
  return {
    type: Types.GET_MY_TOPICS_ERRORS,
    payload: errors
  };
}
