import { IActivity } from "../../../../types";
import { Types } from "./types";

interface EditActivityPayload {
  id: string,
  activity: any,
  onSuccess: () => void,
  onError: () => void
}

export function editActivityRequest(payload: EditActivityPayload){
  return {
    type: Types.EDIT_ACTIVITY_REQUEST,
    payload
  }
}

export function editActivitySuccess(activities: IActivity[] | null){
  return {
    type: Types.EDIT_ACTIVITY_SUCCESS,
    payload: activities
  }
}

export function editActivityError(error: any){
  return {
    type: Types.EDIT_ACTIVITY_ERRORS,
    payload: error
  }
}