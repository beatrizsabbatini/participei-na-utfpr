export interface IUserData{
  name: string,
  ra: number,
  campus: string,
  image: string,
  email: string,
  postedActivities: string[],
  savedActivities: string[],
  group1Points: number,
  group2Points: number,
  group3Points: number,
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

