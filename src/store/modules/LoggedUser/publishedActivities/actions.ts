import { Types } from "./types";

export function getUserPublishedActivitiesRequest(params: any){

  return {
    type: Types.GET_USER_PUBLISHED_ACTIVITIES_REQUEST,
    payload: params
  }
}

export function getUserPublishedActivitiesSuccess(payload: any){
  return {
    type: Types.GET_USER_PUBLISHED_ACTIVITIES_SUCCESS,
    payload: payload
  }
}

export function getUserPublishedActivitiesError(error: any){
  return {
    type: Types.GET_USER_PUBLISHED_ACTIVITIES_ERRORS,
    payload: error
  }
}