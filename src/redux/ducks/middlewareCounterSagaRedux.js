import { createAction, handleActions } from 'redux-actions'
import { delay, put, takeEvery, takeLatest, } from 'redux-saga/effects'

const DECREASE = 'middlewareCounterAsync/DECREASE'
const INCREASE = 'middlewareCounterAsync/INCREASE'

const DECREASE_ASYNC = 'middlewareCounterAsync/DECREASE_ASYNC'
const INCREASE_ASYNC = 'middlewareCounterAsync/INCREASE_ASYNC'

export const decrease = createAction(DECREASE, () => undefined)
export const increase = createAction(INCREASE, () => undefined)

export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined)
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined)

function* decreaseSaga() {
  yield delay(1000)
  yield put(decrease())
}

function* increaseSaga() {
  yield delay(1000)
  yield put(increase())
}

export function* middlewareCounterSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseSaga)
  yield takeLatest(DECREASE_ASYNC, decreaseSaga)
}

const initState = 0

const middlewareCounterSagaRedux = handleActions({
  [DECREASE]: state => state - 1,
  [INCREASE]: state => state + 1,
}, initState)

export default middlewareCounterSagaRedux