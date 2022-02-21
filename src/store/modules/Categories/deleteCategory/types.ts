export interface IDeleteCategoryState{
  loading: boolean,
  errors: string | undefined,
 }

export const Types = {
  DELETE_CATEGORY_REQUEST: 'categories/delete category request',
	DELETE_CATEGORY_ERRORS: 'categories/ delete category errors ',
	DELETE_CATEGORY_SUCCESS: 'categories/ delete category success',
};

