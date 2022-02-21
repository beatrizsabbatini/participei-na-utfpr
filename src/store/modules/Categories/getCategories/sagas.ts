import { takeLatest, put, call, all } from 'redux-saga/effects';
import { fetchCategories } from '../../../../services/categoriesService';
import { getCategoriesError, getCategoriesSuccess } from './actions';
import { Types } from './types';

function* getCategories(action: any): any {

	try {
		const response = yield call(fetchCategories, action.payload?.params ?? null);
    yield put(getCategoriesSuccess(response.data));

		action.payload?.onSuccess();

	} catch (err: any) {

		yield put(getCategoriesError(err));

		action.payload?.onError();
	}
}

export default function* root() {
	yield all([
    takeLatest(Types.GET_CATEGORIES_REQUEST, getCategories)
  ])
}

