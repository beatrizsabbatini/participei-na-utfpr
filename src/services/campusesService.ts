import api from './api';

export const fetchCampuses = async () => {

	return api.request({
		method: 'GET',
		url: '/campuses',
	})
};