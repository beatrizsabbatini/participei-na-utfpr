import api from './api';

export const fetchActivities = (params: any) => {

	return api.request({
		method: 'GET',
		url: '/activities',
		params: params
	})
};

export const createActivity = (body: any) => {

	return api.request({
		method: 'POST',
		url: '/activity',
		data: body 
	})
};

export const editActivity = (payload: any) => {

	return api.request({
		method: 'PATCH',
		url: '/activities',
    params: { id: payload.id },
		data: payload.activity 
	})
};

export const fetchActivitiesByIds = (body: any) => {
  
	return api.request({
		method: 'POST',
		url: `/activities`,
		data: body
	})
};