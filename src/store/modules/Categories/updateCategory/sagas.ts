import { takeLatest, put, call, all } from 'redux-saga/effects';
import { updateCategory } from '../../../../services/categoriesService';
import { updateCategorySuccess, updateCategoryError } from './actions';
import { Types } from './types';

function* editCategory(action: any): any {

	try {
		yield call(updateCategory, action.payload.category);
    yield put(updateCategorySuccess());

		action.payload.onSuccess();

	} catch (err: any) {
		yield put(updateCategoryError(err));

		action.payload.onError();
	}
}

export default function* root() {
	yield all([
    takeLatest(Types.UPDATE_CATEGORY_REQUEST, editCategory)
  ])
}

