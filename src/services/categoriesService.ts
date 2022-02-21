import api from './api';

export const fetchCategories = (params: any) => {

	return api.request({
		method: 'GET',
		url: '/categories',
		params: params
	})
};

export const createCategory = (body: any) => {

	return api.request({
		method: 'POST',
		url: '/categories',
		data: body 
	})
};

export const updateCategory = (body: any) => {
  return api.request({
		method: 'PATCH',
		url: '/categories',
		data: body 
	})
}

export const deleteCategory = (id: string) => {
  return api.request({
		method: 'DELETE',
		url: '/categories',
    params: { id },
	})
}