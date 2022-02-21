import { ICategory } from "../../../../types";
import { Types } from "./types";

interface GetCategoriesPayload {
  params: any, 
  onSuccess: () => void,
  onError: () => void
}

export function getCategoriesRequest(payload?: GetCategoriesPayload){
  return {
    type: Types.GET_CATEGORIES_REQUEST,
    payload
  }
}

export function getCategoriesSuccess(payload: ICategory[]){
  return {
    type: Types.GET_CATEGORIES_SUCCESS,
    payload
  }
}

export function getCategoriesError(error: any){
  return {
    type: Types.GET_CATEGORIES_ERRORS,
    payload: error
  }
}