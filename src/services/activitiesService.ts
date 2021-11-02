import api from './api';

export const fetchActivities = (title: any) => {

	return api.request({
		method: 'GET',
		url: '/activities',
		params: {
			title
		}
	})
};

export const createActivity = (body: any) => {

	return api.request({
		method: 'POST',
		url: '/activity',
		data: body 
	})
};