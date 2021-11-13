import { IActivity } from "../../../../types";

export interface IPublishedActivitiesState{
  data: IActivity[],
  loading: boolean,
  errors: any[] | undefined,
 }

export const Types = {
  GET_USER_PUBLISHED_ACTIVITIES_REQUEST: 'user/get user published activities request',
	GET_USER_PUBLISHED_ACTIVITIES_ERRORS: 'user/ get user published activities errors ',
	GET_USER_PUBLISHED_ACTIVITIES_SUCCESS: 'user/ get user published activities success',
};

