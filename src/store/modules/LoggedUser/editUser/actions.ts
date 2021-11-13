import { Types } from "./types";

export function editUserRequest(id: string, data: any, onError: () => void){

  return {
    type: Types.EDIT_USER_REQUEST,
    payload: { id, data, onError }
  }
}

export function editUserSuccess(){
  return {
    type: Types.EDIT_USER_SUCCESS,
  }
}

export function editUserError(error: any){
  return {
    type: Types.EDIT_USER_ERRORS,
    payload: error
  }
}