
import api from './api';

interface ActivitiesRequestParams{
  uid?: string
}

export const fetchUser = (params: ActivitiesRequestParams) => {
	return api.request({
		method: 'GET',
		url: '/user',
		params
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