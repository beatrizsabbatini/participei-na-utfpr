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