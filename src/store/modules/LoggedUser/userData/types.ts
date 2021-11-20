export interface IUserData{
  name: string,
  ra: number,
  campusId: string,
  image: string,
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
	GET_USER_DATA_REQUEST: 'user/get user data request',
	GET_USER_DATA_ERRORS: 'user/ get user data errors ',
	GET_USER_DATA_SUCCESS: 'user/ get user data success',
};

