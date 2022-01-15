import { Types } from "./types";

export function getOtherUsersPublishedActivitiesRequest(params: any){

  return {
    type: Types.GET_OTHER_USERS_PUBLISHED_ACTIVITIES_REQUEST,
    payload: params
  }
}

export function getOtherUsersPublishedActivitiesSuccess(payload: any){
  return {
    type: Types.GET_OTHER_USERS_PUBLISHED_ACTIVITIES_SUCCESS,
    payload: payload
  }
}

export function getOtherUsersPublishedActivitiesError(error: any){
  return {
    type: Types.GET_OTHER_USERS_PUBLISHED_ACTIVITIES_ERRORS,
    payload: error
  }
}