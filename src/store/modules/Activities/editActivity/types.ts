import { IActivity } from "../../../../types";

export interface IEditActivityState{
  data: IActivity,
  loading: boolean,
  errors: any[] | undefined,
 }

export const Types = {
  EDIT_ACTIVITY_REQUEST: 'activities/edit activity request',
	EDIT_ACTIVITY_ERRORS: 'activities/ edit activity errors ',
	EDIT_ACTIVITY_SUCCESS: 'activities/ edit activity success',
};

export interface ActivitiesRequestParams{
  activity?: IActivity
}
