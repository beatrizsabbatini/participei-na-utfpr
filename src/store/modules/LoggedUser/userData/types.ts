import { ImageSourcePropType } from "react-native";

export interface IUserData{
  admin?: boolean,
  name: string,
  ra: number,
  campusId: string,
  image?: string,
  email: string,
  certificate?: string,
  publishedActivitiesIds: string[],
  savedActivities: SavedActivity[],
  group1Points: number,
  group2Points: number,
  group3Points: number,
  uid: string,
  _id: string
}

export interface Certificate{
  name?: string,
  key?: string,
  url: string
}

export interface SavedActivity{
  id: string,
  certificate?: Certificate,
  participated?: Boolean
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

