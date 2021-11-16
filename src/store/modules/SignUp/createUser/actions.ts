import { IUserData } from "../../LoggedUser/userData/types";
import { Types } from "./types";

interface CreateUserPayload {
  body: Omit<IUserData, "image" | "email">,
  onSuccess: () => void,
  onError: () => void
}

export function createUserRequest(payload: CreateUserPayload){
  return {
    type: Types.CREATE_USER_REQUEST,
    payload
  }
}

export function createUserSuccess(user: IUserData[] | null){
  return {
    type: Types.CREATE_USER_SUCCESS,
    payload: user
  }
}

export function createUserError(error: any){
  return {
    type: Types.CREATE_USER_ERRORS,
    payload: error
  }
}