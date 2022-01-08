import api from './api';

export const fetchCampuses = () => {

	return api.request({
		method: 'GET',
		url: '/campuses',
	})
};