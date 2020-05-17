import actions from './actions';
import types from './types';
import { put, takeLatest } from 'redux-saga/effects';

function* getText(textObj) {
    yield put(actions.setText(textObj.value));
}

export const homeSaga = [
    takeLatest(types.GET_TEXT, getText)
]