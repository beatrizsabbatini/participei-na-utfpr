import { IActivity } from "../../../../types";
import { Types } from "./types";

interface PublishActivityPayload {
  activity: Omit<IActivity, "id">, 
  onSuccess: () => void,
  onError: () => void
}

export function publishActivityRequest(payload: PublishActivityPayload){
  return {
    type: Types.PUBLISH_ACTIVITY_REQUEST,
    payload
  }
}

export function publishActivitySuccess(activities: IActivity[] | null){
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