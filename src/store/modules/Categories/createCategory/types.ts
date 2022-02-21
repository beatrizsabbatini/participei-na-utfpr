import { ICategory } from "../../../../types";

export interface ICreateCategoryState{
  loading: boolean,
  errors: any[] | undefined,
 }

export const Types = {
  CREATE_CATEGORY_REQUEST: 'categories/create category request',
	CREATE_CATEGORY_ERRORS: 'categories/ create category errors ',
	CREATE_CATEGORY_SUCCESS: 'categories/ create category success',
};

export interface CategoriesRequestParams{
  category?: ICategory
}
