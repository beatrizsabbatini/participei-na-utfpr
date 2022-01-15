import { IUserData, Types } from "./types";

export function getOtherUsersDataRequest(params: any){

  return {
    type: Types.GET_OTHER_USERS_DATA_REQUEST,
    payload: params
  }
}

export function getOtherUsersDataSuccess(userData: IUserData){
  return {
    type: Types.GET_OTHER_USERS_DATA_SUCCESS,
    payload: userData
  }
}

export function getOtherUsersDataError(error: any){
  return {
    type: Types.GET_OTHER_USERS_DATA_ERRORS,
    payload: error
  }
}