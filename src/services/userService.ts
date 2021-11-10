
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