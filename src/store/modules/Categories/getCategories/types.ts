import { ICategory } from "../../../../types";

export interface IGetCategoriesState{
  categories: ICategory[]
  loading: boolean,
  errors: any[] | undefined,
 }

export const Types = {
  GET_CATEGORIES_REQUEST: 'categories/get categories request',
	GET_CATEGORIES_ERRORS: 'categories/ get categories errors ',
	GET_CATEGORIES_SUCCESS: 'categories/ get categories success',
};

