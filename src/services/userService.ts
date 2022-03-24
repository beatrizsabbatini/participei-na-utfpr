
import api from './api';

export const fetchUser = (id: string) => {
  console.log(api.request({
		method: 'GET',
		url: '/user',
		params: { uid: id }
	}));
  
	return api.request({
		method: 'GET',
		url: '/user',
		params: { uid: id }
	})
};

export const updateUser = (payload: any) => {

	return api.request({
		method: 'PATCH',
    params: payload.params,
		url: '/users',
		data: payload.data,
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