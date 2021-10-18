import { IActivity } from "../../../types";
import { Types } from "./types";

export function getActivitiesRequest(){
  return {
    type: Types.GET_ACTIVITIES_REQUEST,
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