import api from './api';

export const fetchCampuses = async () => {

  console.log("entrou no fetchCampuses!")

	return api.request({
		method: 'GET',
		url: '/campuses',
	})
};