
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

  console.log("Form data: ", payload.data)
  console.log("payload.isFormData: ",payload.isFormData)

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