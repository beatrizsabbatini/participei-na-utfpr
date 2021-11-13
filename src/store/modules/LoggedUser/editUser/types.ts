export interface IEditUserState{
  loading: boolean,
  errors: any[] | undefined,
 }

export const Types = {
	EDIT_USER_REQUEST: 'user/edit user request',
	EDIT_USER_ERRORS: 'user/ edit user errors ',
	EDIT_USER_SUCCESS: 'user/ edit user success',
};

