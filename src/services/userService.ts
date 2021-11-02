
import api from './api';

interface ActivitiesRequestParams{
  uid?: string
}

export const fetchUser = ({ uid }: ActivitiesRequestParams) => {
	return api.request({
		method: 'GET',
		url: '/user',
		params: {
			uid
		}
	})
};