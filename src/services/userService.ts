
import api from './api';


export const fetchUser = (id: string) => {

	return api.request({
		method: 'GET',
		url: '/user',
		params: { id }
	})
};

export const updateUser = (payload: any) => {

	return api.request({
		method: 'PATCH',
    params: {id: payload.id},
		url: '/users',
		data: payload.data
	})
};

export const createUser = (payload: any) => {

	return api.request({
		method: 'POST',
		url: '/user',
		data: payload.body
	})
};