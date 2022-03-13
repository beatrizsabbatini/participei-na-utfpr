
import api from './api';

export const fetchUser = (id: string) => {

	return api.request({
		method: 'GET',
		url: '/user',
		params: { uid: id }
	})
};

export const updateUser = (payload: any) => {

  const formDataContentType = { 'content-type': 'multipart/form-data' }
  const jsonContentType = { 'content-type': 'application/json' }

	return api.request({
		method: 'PATCH',
    params: payload.params,
		url: '/users',
		data: payload.data,
    headers: payload.isFormData ? formDataContentType : jsonContentType
	})
};

export const createUser = (payload: any) => {

	return api.request({
		method: 'POST',
		url: '/user',
		data: payload.body
	})
};

export const fetchUsers = () => {
  return api.request({
		method: 'GET',
		url: '/users',
	})
}