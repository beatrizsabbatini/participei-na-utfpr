import { ICategory } from "../../../../types";
import { Types } from "./types";

interface CreateCategoryPayload {
  category: Omit<ICategory, "id">, 
  onSuccess: () => void,
  onError: () => void
}

export function createCategoryRequest(payload: CreateCategoryPayload){
  return {
    type: Types.CREATE_CATEGORY_REQUEST,
    payload
  }
}

export function createCategorySuccess(){
  return {
    type: Types.CREATE_CATEGORY_SUCCESS,
  }
}

export function createCategoryError(error: any){
  return {
    type: Types.CREATE_CATEGORY_ERRORS,
    payload: error
  }
}