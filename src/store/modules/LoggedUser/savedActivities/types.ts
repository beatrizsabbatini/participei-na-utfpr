import { IActivity } from "../../../../types";

export interface ISavedActivitiesState{
  data: IActivity[],
  loading: boolean,
  errors: any[] | undefined,
 }

export const Types = {
  GET_USER_SAVED_ACTIVITIES_REQUEST: 'user/get user saved activities request',
	GET_USER_SAVED_ACTIVITIES_ERRORS: 'user/ get user saved activities errors ',
	GET_USER_SAVED_ACTIVITIES_SUCCESS: 'user/ get user saved activities success',
};

