import { ICampus } from "../../../../types";

export interface IGetCampusesState{
  data: ICampus[],
  loading: boolean,
  errors: any[] | undefined,
 }

export const Types = {
	GET_CAMPUSES_REQUEST: 'campus/get campuses request',
	GET_CAMPUSES_SUCCESS: 'campus/get campuses success ',
	GET_CAMPUSES_ERRORS: 'campus/get campuses errors',
};

