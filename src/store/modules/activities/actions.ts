import { IActivity } from "../../../types";
import { Types } from "./types";

export function getActivitiesRequest(params?: any){
  return {
    type: Types.GET_ACTIVITIES_REQUEST,
    payload: params || null
  }
}

export function getActivitiesSuccess(activities: IActivity[]){
  return {
    type: Types.GET_ACTIVITIES_SUCCESS,
    payload: activities
  }
}

export function getActivitiesError(error: any){
  return {
    type: Types.GET_ACTIVITIES_ERRORS,
    payload: error
  }
}