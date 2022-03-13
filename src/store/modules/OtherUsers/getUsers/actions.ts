import { IUser, Types } from "./types";

export function getUsersRequest(){

  return {
    type: Types.GET_USERS_REQUEST,
  }
}

export function getUsersSuccess(users: IUser[]){
  return {
    type: Types.GET_USERS_SUCCESS,
    payload: users
  }
}

export function getUsersError(error: any){
  return {
    type: Types.GET_USERS_ERRORS,
    payload: error
  }
}