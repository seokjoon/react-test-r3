import { createAction, handleActions } from 'redux-actions'
//import { delay, put, select, takeEvery, takeLatest, } from 'redux-saga/effects'
import { delay, put, select, takeLatest, throttle, } from 'redux-saga/effects'

const DECREASE = 'middlewareCounterSaga/DECREASE'
const INCREASE = 'middlewareCounterSaga/INCREASE'
const DECREASE_SAGA = 'middlewareCounterSaga/DECREASE_SAGA'
const INCREASE_SAGA = 'middlewareCounterSaga/INCREASE_SAGA'

const initState = 0

const middlewareCounterSagaRedux = handleActions({
  [DECREASE]: state => state - 1,
  [INCREASE]: state => state + 1,
}, initState)

middlewareCounterSagaRedux.decrease = createAction(DECREASE, () => undefined)
middlewareCounterSagaRedux.increase = createAction(INCREASE, () => undefined)

middlewareCounterSagaRedux.decreaseSaga = createAction(DECREASE_SAGA, () => undefined)
middlewareCounterSagaRedux.increaseSaga = createAction(INCREASE_SAGA, () => undefined)

//function* decreaseAsync() {
middlewareCounterSagaRedux.decreaseAsync = function* () {
  yield delay(1000)
  yield put(middlewareCounterSagaRedux.decrease())
}

//function* increaseAsync() {
middlewareCounterSagaRedux.increaseAsync = function* () {
  yield delay(1000)
  yield put(middlewareCounterSagaRedux.increase())
  console.log(yield select(state => state.middlewareCounterSagaRedux))
}

middlewareCounterSagaRedux.middlewareCounterSaga = function*() {
  //yield takeEvery(INCREASE_SAGA, increaseAsync)
  yield throttle(1000, INCREASE_SAGA, middlewareCounterSagaRedux.increaseAsync)
  yield takeLatest(DECREASE_SAGA, middlewareCounterSagaRedux.decreaseAsync)
}

export default middlewareCounterSagaRedux