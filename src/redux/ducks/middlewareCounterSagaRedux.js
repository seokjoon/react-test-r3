import { createAction, handleActions } from 'redux-actions'
import { delay, put, takeEvery, takeLatest, } from 'redux-saga/effects'

const DECREASE = 'middlewareCounterSaga/DECREASE'
const INCREASE = 'middlewareCounterSaga/INCREASE'

export const decrease = createAction(DECREASE, () => undefined)
export const increase = createAction(INCREASE, () => undefined)

function* decreaseSaga() {
  yield delay(1000)
  yield put(decrease())
}

function* increaseSaga() {
  yield delay(1000)
  yield put(increase())
}

export function* middlewareCounterSaga() {
  yield takeEvery(INCREASE, increaseSaga)
  yield takeLatest(DECREASE, decreaseSaga)
}

const initState = 0

const middlewareCounterSagaRedux = handleActions({
  [DECREASE]: state => state - 1,
  [INCREASE]: state => state + 1,
}, initState)

export default middlewareCounterSagaRedux