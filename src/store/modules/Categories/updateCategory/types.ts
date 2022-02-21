export interface IUpdateCategoryState{
  loading: boolean,
  errors: any[] | undefined,
 }

export const Types = {
  UPDATE_CATEGORY_REQUEST: 'categories/update category request',
	UPDATE_CATEGORY_ERRORS: 'categories/ update category errors ',
	UPDATE_CATEGORY_SUCCESS: 'categories/ update category success',
};

