import { call, put, takeLatest } from "redux-saga/effects";
import { getAll } from "./apis";
import { USER_FETCH } from "./constants";
import { getAllSuccess } from "./actions";
import { all } from "redux-saga/effects";

function* getAllUsers({ payload }) {
  try {
    const response = yield call(getAll);
    yield put(getAllSuccess(response.data));
  } catch (error) {
    console.log("in error");
    console.log(error.message);
  }
}

export default function* rootSaga() {
  yield all([takeLatest(`${USER_FETCH}_PENDING`, getAllUsers)]);
}
