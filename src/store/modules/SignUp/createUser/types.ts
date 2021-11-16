import { IUserData } from "../../LoggedUser/userData/types";

export interface ICreateUserState{
  data: IUserData,
  loading: boolean,
  errors: any[] | undefined,
 }

export const Types = {
  CREATE_USER_REQUEST: 'user/create user request',
	CREATE_USER_ERRORS: 'user/ create user errors ',
	CREATE_USER_SUCCESS: 'user/ create user success',
};
