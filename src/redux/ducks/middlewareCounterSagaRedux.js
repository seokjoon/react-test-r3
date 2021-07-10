import { createAction, handleActions } from 'redux-actions'
//import { delay, put, select, takeEvery, takeLatest, } from 'redux-saga/effects'
import { delay, put, select, takeLatest, throttle, } from 'redux-saga/effects'

const DECREASE = 'middlewareCounterSaga/DECREASE'
const INCREASE = 'middlewareCounterSaga/INCREASE'

const DECREASE_SAGA = 'middlewareCounterSaga/DECREASE_SAGA'
const INCREASE_SAGA = 'middlewareCounterSaga/INCREASE_SAGA'

export const decrease = createAction(DECREASE, () => undefined)
export const increase = createAction(INCREASE, () => undefined)

export const decreaseSaga = createAction(DECREASE_SAGA, () => undefined)
export const increaseSaga = createAction(INCREASE_SAGA, () => undefined)

function* decreaseAsync() {
  yield delay(1000)
  yield put(decrease())
}

function* increaseAsync() {
  yield delay(1000)
  yield put(increase())
  console.log(yield select(state => state.middlewareCounterSagaRedux))
}

export function* middlewareCounterSaga() {
  //yield takeEvery(INCREASE_SAGA, increaseAsync)
  yield throttle(1000, INCREASE_SAGA, increaseAsync)
  yield takeLatest(DECREASE_SAGA, decreaseAsync)
}

const initState = 0

const middlewareCounterSagaRedux = handleActions({
  [DECREASE]: state => state - 1,
  [INCREASE]: state => state + 1,
}, initState)

export default middlewareCounterSagaRedux