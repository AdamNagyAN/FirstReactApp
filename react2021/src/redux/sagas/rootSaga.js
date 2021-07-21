import { takeLatest } from "redux-saga/effects";
import { handleGetUser } from './handlers/user'
import {GET_USER} from '../ducks/user'
export function* watcherSaga() {
    yield takeLatest('get_user', handleGetUser)
}