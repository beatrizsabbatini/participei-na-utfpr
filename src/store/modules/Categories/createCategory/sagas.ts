import { takeLatest, put, call, all } from 'redux-saga/effects';
import { createCategory } from '../../../../services/categoriesService';
import { createCategoryError, createCategorySuccess } from './actions';
import { Types } from './types';

function* publishCategory(action: any): any {

	try {
		yield call(createCategory, action.payload.category);
    yield put(createCategorySuccess());

		action.payload.onSuccess();

	} catch (err: any) {

    console.log("Error: ", err);

		yield put(createCategoryError(err));

		action.payload.onError();
	}
}

export default function* root() {
	yield all([
    takeLatest(Types.CREATE_CATEGORY_REQUEST, publishCategory)
  ])
}

