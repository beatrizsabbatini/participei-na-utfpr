import { takeLatest, put, call, all } from 'redux-saga/effects';
import { deleteCategory } from '../../../../services/categoriesService';
import { deleteCategorySuccess, deleteCategoryError } from './actions';
import { Types } from './types';

function* removeCategory(action: any): any {

	try {
		yield call(deleteCategory, action.payload.id);
    yield put(deleteCategorySuccess());

		action.payload.onSuccess();

	} catch (err: any) {
		yield put(deleteCategoryError(err));

    console.log("ERROR: ", err)
		action.payload.onError();
	}
}

export default function* root() {
	yield all([
    takeLatest(Types.DELETE_CATEGORY_REQUEST, removeCategory)
  ])
}

