import { Types } from "./types";

export function getUserSavedActivitiesRequest(params: any){

  return {
    type: Types.GET_USER_SAVED_ACTIVITIES_REQUEST,
    payload: params
  }
}

export function getUserSavedActivitiesSuccess(payload: any){
  return {
    type: Types.GET_USER_SAVED_ACTIVITIES_SUCCESS,
    payload: payload
  }
}

export function getUserSavedActivitiesError(error: any){
  return {
    type: Types.GET_USER_SAVED_ACTIVITIES_ERRORS,
    payload: error
  }
}