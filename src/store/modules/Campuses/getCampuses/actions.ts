import { ICampus } from "../../../../types";
import { Types } from "./types";

export function getCampusesRequest(){

  return {
    type: Types.GET_CAMPUSES_REQUEST,
  }
}

export function getCampusesSuccess(campuses: ICampus[]){

  return {
    type: Types.GET_CAMPUSES_SUCCESS,
    payload: campuses
  }
}

export function getCampusesError(error: any){
  return {
    type: Types.GET_CAMPUSES_ERRORS,
    payload: error
  }
}