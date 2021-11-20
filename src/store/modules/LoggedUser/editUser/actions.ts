import { Types } from "./types";

export function editUserRequest(_id: string, data: any, onError: () => void, onSuccess?: () => void){

  return {
    type: Types.EDIT_USER_REQUEST,
    payload: { _id, data, onError, onSuccess }
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