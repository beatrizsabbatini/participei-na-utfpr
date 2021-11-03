import { IActivity } from "../../../types";
import { Types } from "./types";

export function publishActivitieyRequest(activity: IActivity){
  return {
    type: Types.PUBLISH_ACTIVITY_REQUEST,
    payload: activity
  }
}

export function publishActivitySuccess(activities: IActivity[]){
  return {
    type: Types.PUBLISH_ACTIVITY_SUCCESS,
    payload: activities
  }
}

export function publishActivityError(error: any){
  return {
    type: Types.PUBLISH_ACTIVITY_ERRORS,
    payload: error
  }
}