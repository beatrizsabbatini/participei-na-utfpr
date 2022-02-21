import { Types } from "./types";

interface DeleteCategoryPayload {
  id: string, 
  onSuccess: () => void,
  onError: () => void
}

export function deleteCategoryRequest(payload: DeleteCategoryPayload){
  return {
    type: Types.DELETE_CATEGORY_REQUEST,
    payload
  }
}

export function deleteCategorySuccess(){
  return {
    type: Types.DELETE_CATEGORY_SUCCESS,
  }
}

export function deleteCategoryError(error: any){
  return {
    type: Types.DELETE_CATEGORY_ERRORS,
    payload: error
  }
}