import { combineReducers } from 'redux'
import middlewareCounterRedux from './middlewareCounterRedux'
import middlewareCounterThunkRedux from './middlewareCounterThunkRedux'
import middlewareCounterSagaRedux from './middlewareCounterSagaRedux'
import reduxCounterRedux from './reduxCounterRedux'
import reduxTodoRedux from './reduxTodoRedux'
import middlewareApiThunkRedux from './middlewareApiThunkRedux'
import middlewareApiSagaRedux, { middlewareApiSaga } from './middlewareApiSagaRedux'
import r3ApiLoadingRedux from './r3ApiLoadingRedux'
import userCreateRedux from './userCreateRedux'
import { all } from 'redux-saga/effects'

const rootReducer = combineReducers({
  middlewareApiSagaRedux,
  middlewareApiThunkRedux,
  middlewareCounterRedux,
  middlewareCounterSagaRedux,
  middlewareCounterThunkRedux,
  r3ApiLoadingRedux,
  reduxCounterRedux,
  reduxTodoRedux,
  userCreateRedux: userCreateRedux,
})

export function* rootSaga() {
  yield all([
    middlewareCounterSagaRedux.middlewareCounterSaga(),
    middlewareApiSaga(),
    userCreateRedux.userSaga(),
  ])
}

export default rootReducer