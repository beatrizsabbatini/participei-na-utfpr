import { IActivity } from "../../../types";

export interface IPublishActivityState{
  data: IActivity,
  loading: boolean,
  errors: any[] | undefined,
 }

export const Types = {
  PUBLISH_ACTIVITY_REQUEST: 'activities/publish activity request',
	PUBLISH_ACTIVITY_ERRORS: 'activities/ publish activity errors ',
	PUBLISH_ACTIVITY_SUCCESS: 'activities/ publish activity success',
};

export interface ActivitiesRequestParams{
  activity?: IActivity
}
