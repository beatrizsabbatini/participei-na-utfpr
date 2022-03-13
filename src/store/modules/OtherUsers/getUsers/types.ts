export interface IUser{
  name: string,
  ra: number,
  campusId: string,
  image?: string,
  email: string,
  publishedActivitiesIds: string[],
  group1Points: number,
  group2Points: number,
  group3Points: number,
  uid: string,
  _id: string
}

export interface IUsersState{
  data: IUser[],
  loading: boolean,
  errors: any[] | undefined,
 }

export const Types = {
	GET_USERS_REQUEST: 'other users/get users request',
	GET_USERS_ERRORS: 'other users/ get users errors ',
	GET_USERS_SUCCESS: 'other users/ get users success',
};

