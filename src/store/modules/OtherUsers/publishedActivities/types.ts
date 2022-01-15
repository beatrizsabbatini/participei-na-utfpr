import { IActivity } from "../../../../types";

export interface IPublishedActivitiesState{
  data: IActivity[],
  loading: boolean,
  errors: any[] | undefined,
 }

export const Types = {
  GET_OTHER_USERS_PUBLISHED_ACTIVITIES_REQUEST: 'other users/get other users published activities request',
	GET_OTHER_USERS_PUBLISHED_ACTIVITIES_ERRORS: 'other users/get other users published activities errors ',
	GET_OTHER_USERS_PUBLISHED_ACTIVITIES_SUCCESS: 'other users/get other users published activities success',
};

