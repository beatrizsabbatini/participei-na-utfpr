import { IUserData, Types } from "./types";

export function getUserDataRequest(){
  return {
    type: Types.GET_USER_DATA_REQUEST,
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