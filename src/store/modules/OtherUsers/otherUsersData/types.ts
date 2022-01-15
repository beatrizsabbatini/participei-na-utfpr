export interface IUserData{
  name: string,
  ra: number,
  campusId: string,
  image?: string,
  email: string,
  publishedActivitiesIds: string[],
  savedActivitiesIds: string[],
  group1Points: number,
  group2Points: number,
  group3Points: number,
  uid: string,
  _id: string
}

export interface IUserDataState{
  data: IUserData,
  loading: boolean,
  errors: any[] | undefined,
 }

export const Types = {
	GET_OTHER_USERS_DATA_REQUEST: 'other users/get other users data request',
	GET_OTHER_USERS_DATA_ERRORS: 'other users/ get other users data errors ',
	GET_OTHER_USERS_DATA_SUCCESS: 'other users/ get other users data success',
};

