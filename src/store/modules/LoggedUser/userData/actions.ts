import { IUserData, Types } from "./types";

export function getUserDataRequest(params: any){

  return {
    type: Types.GET_USER_DATA_REQUEST,
    payload: params
  }
}

export function getUserDataSuccess(userData: IUserData){
  return {
    type: Types.GET_USER_DATA_SUCCESS,
    payload: userData
  }
}

export function getUserDataError(error: any){
  return {
    type: Types.GET_USER_DATA_ERRORS,
    payload: error
  }
}