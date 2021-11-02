import { IActivity, ICategory } from "../../../types";

export interface IActivitiesState{
  data: IActivity[],
  loading: boolean,
  errors: any[] | undefined,
 }

export const Types = {
	GET_ACTIVITIES_REQUEST: 'activities/get activities request',
	GET_ACTIVITIES_ERRORS: 'activities/ get activities errors ',
	GET_ACTIVITIES_SUCCESS: 'activities/ get activities success',
};

export interface ActivitiesRequestParams{
  title?: string
}
