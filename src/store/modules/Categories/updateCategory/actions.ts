import { ICategory } from "../../../../types";
import { Types } from "./types";

interface UpdateCategoryPayload {
  category: any, 
  onSuccess: () => void,
  onError: () => void
}

export function updateCategoryRequest(payload: UpdateCategoryPayload){
  return {
    type: Types.UPDATE_CATEGORY_REQUEST,
    payload
  }
}

export function updateCategorySuccess(){
  return {
    type: Types.UPDATE_CATEGORY_SUCCESS,
  }
}

export function updateCategoryError(error: any){
  return {
    type: Types.UPDATE_CATEGORY_ERRORS,
    payload: error
  }
}