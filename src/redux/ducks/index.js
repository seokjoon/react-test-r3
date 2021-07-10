import { combineReducers } from 'redux'
import middlewareCounterRedux from './middlewareCounterRedux'
import middlewareCounterThunkRedux from './middlewareCounterThunkRedux'
import middlewareCounterSagaRedux, { middlewareCounterSaga } from './middlewareCounterSagaRedux'
import reduxCounterRedux from './reduxCounterRedux'
import reduxTodoRedux from './reduxTodoRedux'
import middlewareApiThunkRedux from './middlewareApiThunkRedux'
import r3ApiLoadingRedux from './r3ApiLoadingRedux'
import { all } from 'redux-saga/effects'

const rootReducer = combineReducers({
  middlewareApiThunkRedux,
  middlewareCounterRedux,
  middlewareCounterSagaRedux,
  middlewareCounterThunkRedux,
  r3ApiLoadingRedux,
  reduxCounterRedux,
  reduxTodoRedux,
})

export function* rootSaga() {
  yield all([middlewareCounterSaga()])
}

export default rootReducer