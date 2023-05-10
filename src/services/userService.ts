
import api from './api';

export const fetchUser = (id: string) => {

  console.log("AAAAAAAAAAAAAAAAAAA")
  console.log("uid: ", id);
  console.log("CHEGOU NA REQUEST CARAIOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
  
	const response = api.request({
		method: 'GET',
		url: '/user',
		params: { uid: id }
	})

  console.log("response: ", response);
  return response
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